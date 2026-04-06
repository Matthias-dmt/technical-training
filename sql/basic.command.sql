// example idempotency

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


// Zero downtime migrations

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

