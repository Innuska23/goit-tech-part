import { createApi } from '@reduxjs/toolkit/query/react';

import { client } from './client';

export const carsAPI = createApi({
  reducerPath: 'carsApi',
  baseQuery: client,
  endpoints: build => ({
    carsList: build.query({
      query: '/cars',
    }),
  }),
});

export const { useCarsListQuery } = carsAPI;
