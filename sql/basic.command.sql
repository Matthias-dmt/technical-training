-- // example idempotency

CREATE TABLE webhook_events (
  id SERIAL PRIMARY KEY,
  event_id VARCHAR(255) UNIQUE,  -- this is required
  status VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO webhook_events (event_id, status)
VALUES ('evt_abc123', 'processing')
ON CONFLICT (event_id) DO UPDATE SET status = EXCLUDED.status
RETURNING id;


-- // Zero downtime migrations

const batchSize = 1000;
const lastId = 0;

while(true) {
    const result = dq.query(`
        UPDATE orders
        SET shipped_at = created_at
        WHERE id > $1
        AND shipped_at IS NULL
        ORDER BY id
        LIMIT $2
        RETURNING id
    `, [lastId, batchSize])

    if(result.rows.length === 0) break;

    lastId = result.rows[result.rows.length - 1].id

    await sleep(100)
}

-- // SCENARIOS

-- Scenario A:
-- A user clicks "Place Order".
-- You need to check if the product still has stock (quantity > 0),
-- decrement it by 1,
-- and create the order
-- all without two users buying the last item simultaneously.

-- Wrap around transaction
-- use select for update to lock to touched row
BEGIN;

SELECT *
FROM products
WHERE id = $1 AND quantity > 0
FOR UPDATE;

UPDATE products
SET quantity = quantity - 1
WHERE id = $1;

INSERT INTO orders (user_id, product_id)
VALUES ($2, $1)

COMMIT;

-- Scenario B:
-- An analytics service receives events from multiple sources.
-- Each event has a unique event_id.
-- You want to process each event exactly once and skip duplicates.

INSERT INTO events (event_id)
VALUES ('event_123')
ON CONFLICT (event_id) DO NOTHING
RETURN id;
