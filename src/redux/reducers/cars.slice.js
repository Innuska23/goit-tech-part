import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
  },
});

export const calendarTaskActions = calendarTaskSlice.actions;
export default calendarTaskSlice.reducer;
