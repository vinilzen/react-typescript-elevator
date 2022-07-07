import { createAsyncThunk } from '@reduxjs/toolkit';
import { getBuildingShape } from '../../services/getBuildingShape';

export const getBuilding = createAsyncThunk(
  'building/getBuilding',
  async (signal: AbortSignal) => getBuildingShape(signal)
);
