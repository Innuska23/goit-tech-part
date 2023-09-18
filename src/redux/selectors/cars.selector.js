import { createSelector } from '@reduxjs/toolkit';

export const selectCarsState = state => state.carsReducer;

export const selectCarsFilter = createSelector(
  selectCarsState,
  state => state.filters
);

export const selectFavorites = createSelector(
  selectCarsState,
  state => state.favorites
);

export const selectQueryParams = createSelector(
  selectCarsState,
  state => state.queryParams
);
