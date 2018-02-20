export default {
  get: (key: string): any => {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      return null;
    }
  },
  set: (key: string, value: any): void => {
    localStorage.setItem(key, JSON.stringify(value));
  },
};
