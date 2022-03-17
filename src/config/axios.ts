import axios from "axios";
import {API_URL, HttpStatusCodes, TIME_OUT_API, TOKEN} from "./constants";

const getHeaders = () => {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-Access-Token": TOKEN,
  };

  return headers;
};

export const ApiClient = axios.create({
  baseURL: API_URL,
  timeout: TIME_OUT_API,
  headers: getHeaders(),
  validateStatus: (status: number) =>
    status >= HttpStatusCodes.OK && status < HttpStatusCodes.BAD_REQUEST,
});
