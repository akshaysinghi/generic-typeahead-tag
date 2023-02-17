import { api_url, defaultCategory } from "./constant";
import { category } from "./util-service";
export const getDataByTitleAndCategory = (keyword) => {
  let categorySelected = category || defaultCategory;
  return fetch(`${api_url}?title=${keyword}&Category=${categorySelected}`, {
    cache: "force-cache",
  });
};
