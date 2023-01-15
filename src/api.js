import axios from "axios";
import { API_KEY, API_URL } from "./config";

const instance = axios.create({
  baseURL: API_URL,
  headers: { Authorization: API_KEY },
});

export const shopAPI = {
  getShop() {
    return instance.get(API_URL).then((response) => {
      return response.data.featured;
    });
  },
};
