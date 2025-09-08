import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL); // Vercel env se read hoga

export default redis;
