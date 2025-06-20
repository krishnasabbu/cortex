from fastapi import FastAPI
from pydantic import BaseModel
from typing import Dict
from playwright.sync_api import sync_playwright
from bs4 import BeautifulSoup
import openai
import re
import uvicorn

# --- Config ---
openai.api_key = "your-openai-api-key"  # Replace this!
HEADLESS = True

# --- FastAPI Setup ---
app = FastAPI()

# --- Request Model ---
class FormRequest(BaseModel):
    url: str
    fields: Dict[str, str]  # {"username": "admin", "password": "secret"}

# --- Step 1: Extract Page DOM ---
def get_html_inputs(url: str) -> str:
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=HEADLESS)
        page = browser.new_page()
        page.goto(url)
        page.wait_for_timeout(1000)
        dom = page.content()
        browser.close()
        return dom

# --- Step 2: Ask LLM to map fields to selectors ---
def infer_selectors_with_llm(html: str, fields: dict) -> dict:
    soup = BeautifulSoup(html.replace('\xa0', ' '), 'html.parser')
    cleaned_html = soup.prettify()[:8000]  # Truncate to fit LLM token limit

    prompt = f"""
You are a web automation agent. Given the following form fields and HTML, match each field to the correct CSS selector.

Fields:
{fields}

HTML:
{cleaned_html}

Output JSON like:
{{
  "username": "#user",
  "password": "input[type='password']",
  "submit": "button[type='submit']"
}}
"""
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}],
        temperature=0
    )
    # Safe eval: match only the JSON string portion
    import json
    text = response['choices'][0]['message']['content']
    json_match = re.search(r"\{.*\}", text, re.DOTALL)
    return json.loads(json_match.group(0)) if json_match else {}

# --- Step 3: Fill form and submit ---
def fill_and_submit(url: str, selectors: dict, fields: dict) -> str:
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=HEADLESS)
        page = browser.new_page()
        page.goto(url)
        page.wait_for_timeout(1000)

        for key, selector in selectors.items():
            if key == "submit":
                continue
            try:
                page.fill(selector, fields[key])
            except Exception as e:
                print(f"Failed to fill '{key}' with selector '{selector}': {e}")

        if "submit" in selectors:
            try:
                page.click(selectors["submit"])
            except Exception as e:
                print(f"Failed to click submit: {e}")

        page.wait_for_timeout(2000)
        result = page.content()
        browser.close()
        return result

# --- Endpoint ---
@app.post("/mcp")
def automate_form(req: FormRequest):
    html = get_html_inputs(req.url)
    selectors = infer_selectors_with_llm(html, req.fields)
    result_html = fill_and_submit(req.url, selectors, req.fields)
    return {
        "success": True,
        "used_selectors": selectors,
        "final_html": result_html[:1000] + "...[truncated]"
    }

# --- Run server ---
if __name__ == "__main__":
    uvicorn.run("mcp_playwright_llm:app", host="0.0.0.0", port=8000, reload=True)
