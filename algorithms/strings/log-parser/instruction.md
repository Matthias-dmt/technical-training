# Log Status Aggregator

You are given a list of log entries.

Each log entry is a string formatted as:

````md

"<timestamp>|<userId>|<status>"
````

````md

"2024-01-01T10:00:00Z|user1|SUCCESS"
````

Your task:

Return an object where:

• The key is the userId
• The value is the number of SUCCESS events for that user

Notes:

• Ignore malformed log entries
• Ignore entries with missing fields
• The input may be empty
• Think about performance
• Avoid unnecessary passes

⸻

Example

Input:

````typescript

[
  "2024-01-01|user1|SUCCESS",
  "2024-01-01|user2|FAIL",
  "2024-01-01|user1|SUCCESS",
  "invalid-entry",
  "2024-01-01|user3|SUCCESS"
]
````

output:

````typescript

{
  user1: 2,
  user3: 1
}
````

## Reasoning

### Problem

we are given a list of log.

the list can be empty in this case return null.

A log can be malformed - we should ignore them.

a log as this shape:
"2024-01-01T10:00:00Z|user1|SUCCESS"

we should return an object with for key the userId recover in the log and and the number of success event for this user.

we create a new Map

we should itterate throught the given log input.

we split the log by the | operator
first element is the date
second element is de user Id
third element is the state

if one of this element appear to be empty we consider that the log is malformed and ignore it.

If log valid and state SUCCESS we get in the map the current value for the userId if already set. and add + 1. otherwise init at 0 + 1

then we return the Map.
