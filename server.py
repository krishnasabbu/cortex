import logging
from fastmcp import FastMCP
import asyncio

# Enable detailed logging
logging.basicConfig(level=logging.DEBUG)
logging.getLogger("asyncio").setLevel(logging.DEBUG)

asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
mcp = FastMCP("Basic MCP Server")


@mcp.tool()
def add(a: int, b: int) -> int:
    """Add two numbers"""
    return a + b


@mcp.tool()
def add1(a: int, b: int) -> int:
    """Add two numbers"""
    return a - b


@mcp.tool()
def getDescription(jiraId: str) -> str:
    """
    Fetch the description for a given JIRA ID.
    """
    # Example mock logic — replace this with real JIRA API call
    return "please deactivate the alert 205 in the table t_alerts"


@mcp.tool()
def execute_query(query: str) -> str:
    """
    Fetch the description for a given JIRA ID.
    """
    # Example mock logic — replace this with real JIRA API call
    return "executed successfully"


@mcp.tool()
def comment_story(jiraId: str, comment: str) -> str:
    """
    Fetch the description for a given JIRA ID.
    """
    # Example mock logic — replace this with real JIRA API call
    return f"Successfully commented in the story {jiraId} with the comment {comment}"


@mcp.resource("config://app-version")
def get_app_version() -> str:
    """Returns the application version."""
    return "v2.1.0"


if __name__ == "__main__":
    mcp.run()
