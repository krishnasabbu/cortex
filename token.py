import time

class AccessTokenManager:
    def __init__(self):
        self.token = None
        self.token_timestamp = 0
        self.refresh_interval = 10 * 60 * 60  # 10 hours in seconds

    def is_token_expired(self):
        return (time.time() - self.token_timestamp) >= self.refresh_interval

    def generate_new_token(self):
        # Replace this with your actual token generation logic
        return "new_access_token_value"

    def get_token(self):
        if self.token is None or self.is_token_expired():
            self.token = self.generate_new_token()
            self.token_timestamp = time.time()
        return self.token

# Usage
token_manager = AccessTokenManager()

def make_authenticated_request():
    token = token_manager.get_token()
    print(f"Using token: {token}")
    # Add the token to your request headers here


import html
import re

import html
import re
from itertools import product
from collections import defaultdict

import html
import re
from itertools import product
from collections import defaultdict


def extract_equal_conditions(html_lines):
    value_options = defaultdict(set)

    for line in html_lines:
        decoded = html.unescape(line)
        # Match key, operator, value
        match = re.search(r'<(\w+)>\s*(=|!=|<=|>=|<|>)\s*"([^"]+)"', decoded)
        if match:
            key, operator, value = match.groups()
            if operator == '=':
                value_options[key].add(value)
            else:
                # You can collect or log these if needed
                pass  # e.g., print(f"Skipping {operator} on {key}")

    # Cartesian product of all key = value pairs
    keys = list(value_options.keys())
    value_combinations = product(*(value_options[key] for key in keys))

    return [dict(zip(keys, combo)) for combo in value_combinations]


html_lines = [
    '<p>&lt;tran_code&gt; = &quot;100&quot;</p>',
    '<p>&lt;tran_code&gt; = &quot;101&quot;</p>',
    '<p>&lt;status&gt; = &quot;SUCCESS&quot;</p>',
    '<p>&lt;status&gt; = &quot;FAILURE&quot;</p>',
    '<p>&lt;amount&gt; >= &quot;1000&quot;</p>',   # Skipped
    '<p>&lt;amount&gt; <= &quot;5000&quot;</p>'   # Skipped
]

output = extract_equal_conditions(html_lines)
print(output)


