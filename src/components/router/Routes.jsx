import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';

import { Spinner } from '../Spinner/Spinner';

import { router } from './router.jsx';

export const Routes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
