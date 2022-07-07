import { AxiosRequestConfig } from 'axios';

export const defaultConfig: AxiosRequestConfig = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};
