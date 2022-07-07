import { createSelector } from '@reduxjs/toolkit';
import { BuildingState } from './reducer';

export const selectBuildingShape = (state: { building: BuildingState }) =>
  state.building;

export const buildingShapeSelector = createSelector(
  selectBuildingShape,
  (building) => building
);
