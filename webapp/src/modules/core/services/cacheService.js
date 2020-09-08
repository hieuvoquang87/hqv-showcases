
export const cacheItemWithKey = (key, data) => {
  if(typeof window !== 'undefined') {
    const dataString = JSON.stringify(data)
    window.localStorage.setItem(key, dataString);
    return true;
  }
  return false;
} 

export const getItemWithKey = (key) => {
  if(typeof window !== 'undefined') {
    try {
      const dataString = window.localStorage.getItem(key);
      return JSON.parse(dataString);
    } catch (e) {
      window.localStorage.removeItem(key);
      return null;
    }
    
  }
  return null;
}