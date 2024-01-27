/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { TOKEN } from "./constants";

const _getConfig = (config?: AxiosRequestConfig) => {
  return {
    ...config,
    baseURL: process.env.REACT_APP_SERVER_LINK,
    timeout: 10000,
    headers: {
      ...config?.headers,
      Authorization: `Bearer ${
        sessionStorage.getItem(TOKEN) || localStorage.getItem(TOKEN)
      }`,
    },
  };
};

const _get = <T = any, R = AxiosResponse<T>>(
  url: string,
  config?: AxiosRequestConfig
) => {
  return axios.get<T, R>(url, _getConfig(config));
};

const _post = <T = any, R = AxiosResponse<T>>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
) => {
  return axios.post<T, R>(url, data, _getConfig(config));
};

const _put = <T = any, R = AxiosResponse<T>>(
  url: string,
  data: any,
  config?: AxiosRequestConfig
) => {
  return axios.put<T, R>(url, data, _getConfig(config));
};

const _delete = <T = any, R = AxiosResponse<T>>(
  url: string,
  config?: AxiosRequestConfig
) => {
  return axios.delete<T, R>(url, _getConfig(config));
};

export const httpClient = {
  get:(
    url: string,
    config?: AxiosRequestConfig
  ) => {
    return _get(url, config);
  },
  post:(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) => {
    return _post(url, data, config);
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  put:(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) => {
    return _put(url, data, config);
  },
  delete:(
    url: string,
    config?: AxiosRequestConfig
  ) => {
    return _delete(url, config);
  },
};