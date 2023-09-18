import { createApi } from '@reduxjs/toolkit/query/react';

import { client } from './client';

export const carsAPI = createApi({
  reducerPath: 'carsApi',
  baseQuery: client,
  endpoints: build => ({
    carsList: build.query({
      query: (params = { limit: 10, page: 1 }) => {
        return {
          url: '/cars',
          params,
        };
      },
    }),
  }),
});

export const { useCarsListQuery } = carsAPI;
