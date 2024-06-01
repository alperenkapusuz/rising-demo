import { API_URL } from '@/lib/config/env';
import { getToken } from '@/lib/utils/token-action';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const headers: Readonly<Record<string, string | boolean>> = {
  'Content-Type': 'application/json',
  'Accept-Language': 'tr',
};

const injectToken = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  try {
    const token = getToken();
    if (token != undefined && token != null) {
      config.headers = config.headers || {};
      config.headers.Authorization = token;
    }
    return config;
  } catch (error: any) {
    throw new Error(error);
  }
};

class Http {
  private instance: AxiosInstance | null = null;

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp();
  }

  initHttp() {
    const http = axios.create({
      baseURL: API_URL,
      headers,
      timeout: 1000 * 20,
    });

    http.interceptors.request.use(injectToken, (error) => Promise.reject(error));

    http.interceptors.response.use(
      (response) => response,
      (error) => {
        const { response } = error;
        return response;
      }
    );

    this.instance = http;
    return http;
  }

  GET<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.get<T, R>(url, config);
  }

  POST<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
    return this.http.post<T, R>(url, data, config);
  }
}

export const http = new Http();
