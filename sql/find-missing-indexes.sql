SELECT
  conrelid::regclass AS table,
  a.attname AS column
FROM pg_constraint c
JOIN pg_attribute a ON a.attnum = ANY(c.conkey)
  AND a.attrelid = c.conrelid
WHERE c.contype = 'f'
AND NOT EXISTS (
  SELECT 1 FROM pg_index i
  WHERE i.indrelid = c.conrelid
  AND a.attnum = ANY(i.indkey)
);
