import { AxiosRequestConfig } from 'axios';
import { api } from './createInstance';

export const getJSON = <T = unknown>(
  url: string,
  config?: AxiosRequestConfig<T>
): Promise<T> => {
  return api.get<T>(url, config).then(({ data }) => data);
};
