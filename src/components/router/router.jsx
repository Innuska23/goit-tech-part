import { createBrowserRouter } from 'react-router-dom';

import { ROUTER_URL_LIST } from '../../constants/index.js';

import { HomePage } from '../../pages/HomePage/index.js';
import { FavoritesPage } from '../../pages/FavoritesPage/index.js';
import { CatalogPage } from '../../pages/CatalogPage/index.js';

export const router = createBrowserRouter(
  [
    {
      path: ROUTER_URL_LIST.HOME,
      element: <HomePage />,
    },
    {
      path: ROUTER_URL_LIST.CATALOG,
      element: <CatalogPage />,
    },
    {
      path: ROUTER_URL_LIST.FAVORITES,
      element: <FavoritesPage />,
    },
  ],
  { basename: '/goit-tech-part/' }
);
