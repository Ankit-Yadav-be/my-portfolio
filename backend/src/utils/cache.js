import redis from "../utils/redisClient.js"; // your redis instance from ioredis

// TTL in seconds
export const setCache = async (key, value, ttl = 600) => {
  await redis.set(key, JSON.stringify(value), "EX", ttl);
};

export const getCache = async (key) => {
  const data = await redis.get(key);
  return data ? JSON.parse(data) : null;
};

export const deleteCache = async (key) => {
  await redis.del(key);
};
