from fastapi import FastAPI, Request
from fastapi.responses import StreamingResponse, JSONResponse
from openai import OpenAI
import os
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
import json

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


@app.post("/v1/chat/completions")
async def stream_chat(body: dict):
    stream = body.get("stream", False)

    if stream:
        def event_generator():
            try:
                stream_resp = client.chat.completions.create(**body)
                for chunk in stream_resp:
                    yield f"data: {json.dumps(chunk.model_dump())}\n\n"
                yield "data: [DONE]\n\n"
            except Exception as e:
                yield f"data: {json.dumps({'error': str(e)})}\n\n"

        return StreamingResponse(event_generator(), media_type="text/event-stream")

    else:
        try:
            response = client.chat.completions.create(**body)
            return JSONResponse(content=response.model_dump())
        except Exception as e:
            return JSONResponse(status_code=500, content={"error": str(e)})
