import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { carsAPI } from './api/carsAPI.js';
import storage from 'redux-persist/lib/storage';
import carsReducer from './reducers/cars.slice.js';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist/es/constants';
import { persistReducer, persistStore } from 'redux-persist';

const APIS = [carsAPI];

const apiReducers = APIS.reduce((acc, { reducerPath, reducer }) => {
  return {
    ...acc,
    [reducerPath]: reducer,
  };
}, {});

const reducers = combineReducers({
  ...apiReducers,
  carsReducer,
});

const middlewares = APIS.map(({ middleware }) => middleware);

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middlewares),
  devTools: import.meta.env.DEV,
});
export const persistor = persistStore(store);
