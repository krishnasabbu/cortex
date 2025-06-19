import re
from html import unescape

html_lines = [
    '<p>&lt;field1&gt; = &quot;A&quot;</p>',
    '<p>&lt;field1&gt; = &quot;B&quot;</p>',
    '<p>&lt;field2&gt; != &quot;X&quot;</p>',
    '<p>&lt;field3&gt; &gt;= &quot;10&quot;</p>',
    '<p>&lt;field3&gt; &lt;= &quot;20&quot;</p>'
]

field_conditions = {}

for line in html_lines:
    # Step 1: Unescape HTML
    line_unescaped = unescape(line)  # Now it's: <field1> = "A"

    # Step 2: Extract inner text from <p> tags
    match_text = re.search(r'<p>(.*?)</p>', line_unescaped)
    if not match_text:
        continue

    text = match_text.group(1).strip()  # e.g., <field1> = "A"

    # Step 3: Extract field name, operator, and value
    match = re.match(r'<(\w+)> *(=|!=|>=|<=|>|<) *"([^"]+)"', text)
    if match:
        field, op, value = match.groups()
        field_conditions.setdefault(field, []).append((op, value))

# Step 4: Build output
output = []

for field, conditions in field_conditions.items():
    equals = []
    not_equals = []
    ranges = {}

    for op, val in conditions:
        if op == "=":
            equals.append(val)
        elif op == "!=":
            not_equals.append(val)
        else:
            ranges[op] = float(val)

    for val in equals:
        output.append({field: val})

    for val in not_equals:
        output.append({field: f"not_{val}"})

    if ranges:
        min_val = ranges.get(">=", ranges.get(">", float("-inf")))
        max_val = ranges.get("<=", ranges.get("<", float("inf")))
        if min_val != float("-inf") and max_val != float("inf"):
            result = str(int((min_val + max_val) / 2))
        elif min_val != float("-inf"):
            result = str(int(min_val + 10))
        elif max_val != float("inf"):
            result = str(int(max_val - 5))
        else:
            result = "unknown"

        output.append({field: result})

# Step 5: Print output
for item in output:
    print(item)
