import axios, { AxiosRequestConfig } from 'axios';
import { defaultConfig } from './defaultConfig';

const createInstance = (config?: AxiosRequestConfig) => {
  const instance = axios.create(config);
  return instance;
};

export const api = createInstance(defaultConfig);
