import NodeCache from "node-cache";

// default TTL = 5 minutes
const cache = new NodeCache({ stdTTL: 300, checkperiod: 60 });

// Set cache
export const setCache = (key, value, ttl = 300) => {
  cache.set(key, value, ttl);
};

// Get cache
export const getCache = (key) => {
  return cache.get(key) || null;
};

// Delete specific key
export const deleteCache = (key) => {
  cache.del(key);
};

// Clear all cached data
export const clearAllCache = () => {
  cache.flushAll();
};

export default cache;
