import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { carsAPI } from './api/carsAPI.js';

const APIS = [carsAPI];

const apiReducers = APIS.reduce((acc, { reducerPath, reducer }) => {
  return {
    ...acc,
    [reducerPath]: reducer,
  };
}, {});

const reducers = combineReducers({
  ...apiReducers,
});

const middlewares = APIS.map(({ middleware }) => middleware);

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewares),
  devTools: import.meta.env.DEV,
});
