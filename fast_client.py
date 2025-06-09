import asyncio
from typing import Dict, Any

import uvicorn
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastmcp import Client
from fastmcp.client.transports import StdioTransport, SSETransport
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Define request schema
class ToolCallRequest(BaseModel):
    path: str
    tool_name: str
    arguments: Dict[str, Any]  # Use Any instead of any


class ScriptPathRequest(BaseModel):
    path: str


# Tool response model
class ToolInfo(BaseModel):
    name: str
    description: str
    parameters: Dict[str, Any]


@app.post("/mcp-tools")
async def get_tools(request: ScriptPathRequest):
    path = request.path  # or any input source

    try:
        if path.endswith(".py"):
            transport = path
        else:
            # Ensure the base URL (e.g. from request.path) is correctly constructed
            transport = SSETransport(f"{path}/sse")

        async with Client(transport) as client:
            tools = await client.list_tools()

            tool_list = []
            for tool in tools:
                input_schema = getattr(tool, "inputSchema", {})
                properties = input_schema.get("properties", {})

                arguments = [
                    {"title": prop_name, "type": prop_attrs.get("type", "string")}
                    for prop_name, prop_attrs in properties.items()
                ]

                tool_list.append({
                    "name": tool.name,
                    "arguments": arguments
                })

            return tool_list

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/call")
async def call_tool_dynamically(request: ToolCallRequest):
    path = request.path
    tool_name = request.tool_name
    args = request.arguments

    if path.endswith(".py"):
        transport = path
    else:
        # Ensure the base URL (e.g. from request.path) is correctly constructed
        transport = SSETransport(f"{path}/sse")

    async with Client(transport) as client:
        # List tools to verify tool exists
        tools = await client.list_tools()
        tool_map = {tool.name: tool for tool in tools}

        if tool_name not in tool_map:
            raise ValueError(f"Tool '{tool_name}' not found.")

        tool = tool_map[tool_name]

        # Call the tool with provided arguments
        result = await client.call_tool(tool_name, arguments=args)
        return result


if __name__ == "__main__":
    uvicorn.run(app, port=8989)
