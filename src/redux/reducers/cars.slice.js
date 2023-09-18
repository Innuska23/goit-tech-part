import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  queryParams: {
    page: 1,
    limit: 8,
  },
  favorites: [],
  filters: {
    price: null,
    make: null,
    range: {
      from: null,
      to: null,
    },
  },
};

export const calendarTaskSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        current => current.id !== action.payload.id
      );
    },

    setFilters: (state, action) => {
      state.filters = action.payload;
    },

    resetFilters: (state, action) => {
      state.filters = initialState.filters;
    },

    setQueryParams: (state, action) => {
      state.queryParams = action.payload;
    },
  },
});

export const calendarTaskActions = calendarTaskSlice.actions;
export default calendarTaskSlice.reducer;
