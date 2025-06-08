from fastapi import FastAPI, Request
from fastapi.responses import StreamingResponse, JSONResponse
from openai import OpenAI
import os
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
import json
import asyncio

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
            return JSONResponse(status_code=500, content={"error": str(e)})
