import html
import re
from collections import defaultdict
from itertools import product
import json


def smart_number(n):
    """Return string of int if whole number, else float"""
    return str(int(n)) if float(n).is_integer() else str(n)


def evaluate_conditions(html_lines):
    conditions = defaultdict(list)

    for line in html_lines:
        try:
            decoded = html.unescape(line)
            match = re.search(r'<(\w+)>\s*(=|!=|<=|>=|<|>)\s*"?([^"<>\s]+)"?', decoded)
            if not match:
                continue

            key, operator, value = match.groups()

            # Try to parse as number
            try:
                num_val = float(value)
                is_number = True
            except:
                is_number = False

            if operator == '=':
                conditions[key].append(value)
            elif operator == '!=':
                if is_number:
                    conditions[key].append(smart_number(num_val + 1))
                else:
                    conditions[key].append("Y" if value != "Y" else "Z")
            elif operator in ('>=', '>'):
                if is_number:
                    base = num_val + (1 if operator == '>' else 0)
                    conditions[key].append(smart_number(base + 10))
                else:
                    conditions[key].append(value + "_high")
            elif operator in ('<=', '<'):
                if is_number:
                    base = num_val - (1 if operator == '<' else 0)
                    conditions[key].append(smart_number(base - 5))
                else:
                    conditions[key].append(value + "_low")
        except Exception as e:
            print(f"Error: {e}")
            continue

    return {k: sorted(set(v)) for k, v in conditions.items()}


def normalize_html_lines(html_lines):
    normalized = []
    for line in html_lines:
        parts = re.findall(r'<p>.*?<\/p>', line)
        normalized.extend(parts)
    return normalized


def generate_combinations_json(data_dict):
    keys = list(data_dict.keys())
    values_product = product(*(data_dict[key] for key in keys))
    combinations = [dict(zip(keys, combo)) for combo in values_product]
    return json.dumps(combinations, indent=2)


html_lines = [
    '<p>&lt;field1&gt; = &quot;A&quot;</p><p>&lt;field1&gt; != &quot;A&quot;</p>',
    '<p>&lt;field1&gt; = &quot;B&quot;</p>',
    '<p>&lt;field2&gt; != &quot;X&quot;</p>',
    '<p>&lt;field3&gt; &gt;= &quot;10&quot;</p>',
    '<p>&lt;field3&gt; &lt;= &quot;20&quot;</p>'
]

html_output_lines = normalize_html_lines(html_lines)

output = evaluate_conditions(html_output_lines)

combinations = generate_combinations_json(output)

print(combinations)
# for item in combinations:
#     print(item)
