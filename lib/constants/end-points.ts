import { APIConfig } from '@/lib/config/api';

const RISING_SERVICE = `${APIConfig.baseURL}`;

export const END_POINTS = {
  AUTH: {
    LOGIN: `${RISING_SERVICE}/login`,
  },
  PANEL: {
    GET_TABLE: `${RISING_SERVICE}/get-table`,
    GET_INFO: `${RISING_SERVICE}/get-info`,
  },
};
