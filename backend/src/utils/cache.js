const cache = new Map();

export const setCache = (key, value, ttl = 5 * 60 * 1000) => {  // default 5 min
  cache.set(key, {
    value,
    expiry: Date.now() + ttl,
  });
};

export const getCache = (key) => {
  const data = cache.get(key);
  if (!data) return null;

  if (Date.now() > data.expiry) {
    cache.delete(key);
    return null;
  }

  return data.value;
};

export const deleteCache = (key) => {
  cache.delete(key);
};

export const clearAllCache = () => {
  cache.clear();
};
