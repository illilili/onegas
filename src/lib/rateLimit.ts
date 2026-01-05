import crypto from "crypto";

/**
 * 메모리 기반 초간단 rate limit (서버 재시작/서버리스 환경에선 완벽하지 않음)
 * MVP용. 운영에서 더 빡세게 하려면 Redis/Upstash 같은 걸로 교체.
 */
const bucket = new Map<string, { count: number; resetAt: number }>();

export function rateLimitOrThrow(ip: string, limit = 5, windowMs = 60_000) {
  const now = Date.now();
  const key = hashKey(ip);

  const cur = bucket.get(key);
  if (!cur || cur.resetAt < now) {
    bucket.set(key, { count: 1, resetAt: now + windowMs });
    return;
  }

  if (cur.count >= limit) {
    throw new Error("Too many requests");
  }

  cur.count += 1;
  bucket.set(key, cur);
}

function hashKey(ip: string) {
  const salt = process.env.RATE_LIMIT_SALT ?? "salt";
  return crypto.createHash("sha256").update(`${salt}:${ip}`).digest("hex");
}
