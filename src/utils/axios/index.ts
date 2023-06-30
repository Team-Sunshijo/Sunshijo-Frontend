import axios, { AxiosError } from "axios";
import { refresh } from "./refresh";

export const instance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 10000,
});

instance.interceptors.request.use(refresh, function (error: AxiosError) {
  alert("네트워크를 확인해주세요.");
  return Promise.reject(error);
});

instance.interceptors.response.use(
  async (response): Promise<any> => {
    return response;
  },
  async (error): Promise<any> => {
    return Promise.reject(error);
  }
);

export default instance;
