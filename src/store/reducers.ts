import { combineReducers } from '@reduxjs/toolkit';
import { building } from './building/reducer';

export const reducers = combineReducers({
  building,
});

export type RootState = ReturnType<typeof reducers>;
