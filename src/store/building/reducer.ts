import { createReducer, createSlice } from '@reduxjs/toolkit';
import { getBuilding } from './action';
import { BuildingShape } from '../../services/getBuildingShape';

export interface BuildingState {
  payload?: BuildingShape;
  isLoading: boolean;
}

const initialState: BuildingState = {
  payload: undefined,
  isLoading: false,
};

export const building = createReducer(initialState, (builder) => {
  builder
    .addCase(getBuilding.pending, () => ({
      isLoading: true,
    }))
    .addCase(getBuilding.fulfilled, (_, { payload }) => ({
      isLoading: false,
      payload,
    }))
    .addCase(getBuilding.rejected, (_, { error }) => {
      // only call dispatch when we know the fetch was not aborted
      if (error.code !== 'ERR_CANCELED') {
        return {
          isLoading: false,
          payload: undefined,
        };
      }
    });
});

export const buildingSlice = createSlice({
  name: 'building',
  initialState,
  reducers: {
    building,
  },
});
