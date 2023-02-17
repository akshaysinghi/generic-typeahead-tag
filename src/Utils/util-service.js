import { apiTimeOut } from "./constant";
export let category;
export const limitApiCall = (callback) => {
  let timer;
  return function (...args) {
    const context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      callback.apply(context, args);
    }, apiTimeOut);
  };
};
export const setAvailableCategory = (key) => {
  category = key;
};
