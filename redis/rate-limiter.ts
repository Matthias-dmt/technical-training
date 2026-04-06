// 5 attempts 15 min

async function checkRateLimit(
  redis: RedisClient,
  userId: string
): Promise<boolean> {
  // returns true if user is allowed
  // returns false if user has exceeded the limit
  let count = await redis.incr(`LoginAttemptCount-${userId}`)

  if (count === 1) {
    await redis.expire(`LoginAttemptCount-${userId}`, 900)
  }

  return count <= 5
}