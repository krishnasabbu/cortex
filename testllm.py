from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import StreamingResponse, JSONResponse
from openai import OpenAI
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
import json
import asyncio
import re
from LocalEmbeddingStore import LocalEmbeddingStore
from pydantic import BaseModel
import os

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = OpenAI(
    api_key="tgp_v1_cKEclmBXjEfh_0p359F19ac6fUzUCPYKWzyakaZAALk",  # Recommended: use .env instead of hardcoding
    base_url="https://api.together.xyz/v1",
)

store = LocalEmbeddingStore()


class EmbeddingCreateRequest(BaseModel):
    path: str
    index: str | None = None


class EmbeddingSearchRequest(BaseModel):
    query: str
    index_name: str
    top_k: int = 5


@app.post("/v1/embedding-store/create")
def create_embedding(body: EmbeddingCreateRequest):
    print("path ====")
    folder_path = body.path

    if not os.path.isdir(folder_path):
        raise HTTPException(status_code=400, detail="Invalid folder path")

    documents = []
    filenames = []

    print("path ====")

    for filename in os.listdir(folder_path):
        file_path = os.path.join(folder_path, filename)
        if os.path.isfile(file_path):
            try:
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.read()
                    documents.append(content)
                    filenames.append(filename)
            except Exception as e:
                raise HTTPException(status_code=500, detail=f"Error reading {filename}: {str(e)}")

    if not documents:
        raise HTTPException(status_code=400, detail="No valid files found in folder")

    return store.create(documents, filenames, body.index)


@app.post("/v1/embedding-store/search")
def search_embedding(body: EmbeddingSearchRequest):
    try:
        return {"results": store.search(body.query, body.index_name, body.top_k)}
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))


@app.post("/v1/chat/completions")
async def stream_chat(body: dict, request: Request):
    stream = body.get("stream", False)

    headers = dict(request.headers)
    query_params = dict(request.query_params)
    body = await request.json()

    full_request = {
        "headers": headers,
        "query_params": query_params,
        "body": body
    }

    print(json.dumps(full_request, indent=2))

    if stream:
        def sync_stream():
            return client.chat.completions.create(**body)

        async def event_generator():
            loop = asyncio.get_running_loop()
            stream = await loop.run_in_executor(None, sync_stream)
            for chunk in stream:
                yield f"data: {json.dumps(chunk.model_dump())}\n\n"

            yield "data: [DONE]\n\n"

        return StreamingResponse(event_generator(), media_type="text/event-stream")

    else:
        try:
            response = client.chat.completions.create(**body)
            return JSONResponse(content=response.model_dump())
        except Exception as e:
            # Attempt to extract message from nested error structure
            try:
                error_json = str(e)
                # Extract the inner JSON from the exception string
                match = re.search(r"\{.*'message': '(.*?)'.*?\}", error_json)
                if match:
                    error_message = match.group(1)
                else:
                    error_message = "An unexpected error occurred."
            except Exception:
                error_message = "An unexpected error occurred."

            # Format the error in the same shape as OpenAI-style response
            formatted_error = {
                "choices": [
                    {
                        "message": {
                            "content": f"Error: {error_message}"
                        }
                    }
                ]
            }
            return JSONResponse(status_code=500, content=formatted_error)
