import { createBrowserRouter } from 'react-router-dom';

import { ROUTER_URL_LIST } from '../../constants/index.js';

export const router = createBrowserRouter(
  [
    {
      path: ROUTER_URL_LIST.HOME,
      async lazy() {
        const { HomePage } = await import('../../pages/HomePage');

        return { element: <HomePage /> };
      },
    },
    {
      path: ROUTER_URL_LIST.CATALOG,
      async lazy() {
        const { CatalogPage } = await import('../../pages/CatalogPage');

        return { element: <CatalogPage /> };
      },
    },
    {
      path: ROUTER_URL_LIST.FAVORITES,
      async lazy() {
        const { FavoritesPage } = await import('../../pages/FavoritesPage');

        return { element: <FavoritesPage /> };
      },
    },
  ],
  { basename: import.meta.env.DEV ? '/' : '/goit-tech-part/' }
);
