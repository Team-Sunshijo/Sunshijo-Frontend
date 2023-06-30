import axios, { InternalAxiosRequestConfig } from "axios";
import { instance } from ".";
import storageKeys from "../../constant/storageKeys";
import Uri from "../../constant/uri";
import RefreshError from "../../interface/refreshError";

const getDateWithAddHour = (hour: number) => {
  const date = new Date();
  date.setHours(date.getHours() + hour);
  return date;
};

interface Token {
  accessToken: string;
  refreshToken: string;
}

export const refresh = async (
  config: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig> => {
  const expireAt = localStorage.getItem(storageKeys.expireAt);
  let accessToken = localStorage.getItem(storageKeys.accessToken);
  const refreshToken = localStorage.getItem(storageKeys.refreshToken);

  if (!refreshToken || !expireAt) {
    throw new RefreshError("NO_TOKEN");
  }

  const uri = Uri.refresh.get();

  if (new Date() >= new Date(expireAt)) {
    try {
      const { accessToken: newAccessToken, refreshToken: newRefreshToken } = (
        await instance.put<Token>(uri, { refreshToken })
      ).data;

      localStorage.setItem(storageKeys.accessToken, newAccessToken);
      localStorage.setItem(storageKeys.refreshToken, newRefreshToken);
      localStorage.setItem(
        storageKeys.expireAt,
        getDateWithAddHour(24).toString()
      );

      accessToken = newAccessToken;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response?.status === 401) {
          throw new RefreshError("EXPIRED_TOKEN");
        }
      }
      throw new RefreshError("NETWORK_ERROR");
    }
  }

  config.headers!["Authorization"] = `Bearer ${accessToken}`;

  return config;
};
