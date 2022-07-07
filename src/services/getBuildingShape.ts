import { API_URL } from '../api/const';
import { getJSON } from '../api/getJSON';

export interface BuildingShape {
  elevators: number;
  floors: number;
}

export const getBuildingShape = (signal?: AbortSignal) => {
  return getJSON<BuildingShape>(`${API_URL}building`, {
    signal,
  });
};
