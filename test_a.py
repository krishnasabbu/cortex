import re
from html import unescape
from datetime import datetime, timedelta

html_lines = [
    '<p>&lt;field1&gt;\xa0= "A"</p>',
    '<p>&lt;field1&gt; = &quot;B&quot;</p>',
    '<p>&lt;field2&gt; != &quot;X&quot;</p>',
    '<p>&lt;field3&gt; &gt;= &quot;10&quot;</p>',
    '<p>&lt;field3&gt; &lt;= &quot;20&quot;</p>',
    '<p>&lt;timeField&gt; &gt;= &quot;00:00:00&quot;</p>',
    '<p>&lt;timeField&gt; &lt;= &quot;11:59:59 AM&quot;</p>'
]

def parse_time(value):
    for fmt in ("%H:%M:%S", "%I:%M:%S %p"):
        try:
            return datetime.strptime(value, fmt)
        except ValueError:
            continue
    return None

field_conditions = {}

for line in html_lines:
    line_clean = unescape(line.replace('\xa0', ' '))
    match_text = re.search(r'<p>(.*?)</p>', line_clean)
    if not match_text:
        continue

    text = match_text.group(1).strip()
    match = re.match(r'<(\w+)> *(=|!=|>=|<=|>|<) *"([^"]+)"', text)
    if match:
        field, op, value = match.groups()
        field_conditions.setdefault(field, []).append((op, value))

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
            ranges[op] = val  # store raw for now

    # Add = values
    for val in equals:
        output.append({field: val})

    # Add != values
    for val in not_equals:
        output.append({field: f"not_{val}"})

    # Handle ranges
    if ranges:
        try:
            # Try numeric range first
            min_val = float(ranges.get(">=", ranges.get(">", float("-inf"))))
            max_val = float(ranges.get("<=", ranges.get("<", float("inf"))))
            if min_val != float("-inf") and max_val != float("inf"):
                val = str(int((min_val + max_val) / 2))
            elif min_val != float("-inf"):
                val = str(int(min_val + 10))
            elif max_val != float("inf"):
                val = str(int(max_val - 5))
            else:
                val = "unknown"
            output.append({field: val})
        except ValueError:
            # Try datetime
            min_time = parse_time(ranges.get(">=", ranges.get(">", "00:00:00")))
            max_time = parse_time(ranges.get("<=", ranges.get("<", "23:59:59")))

            if min_time and max_time:
                mid_time = min_time + (max_time - min_time) / 2
                val = mid_time.strftime("%H:%M:%S")
            elif min_time:
                val = (min_time + timedelta(hours=1)).strftime("%H:%M:%S")
            elif max_time:
                val = (max_time - timedelta(hours=1)).strftime("%H:%M:%S")
            else:
                val = "unknown"
            output.append({field: val})

# Print output
for item in output:
    print(item)
