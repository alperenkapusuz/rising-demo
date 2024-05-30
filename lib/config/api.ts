import { API_URL } from "@/lib/config/env";

export type APIConfigType = {
  baseURL: string | undefined;
};

export const APIConfig: APIConfigType = {
  baseURL: API_URL
};