import { CatalogLayout } from '../../components/Layout/CatalogLayout/index.js';
import { CatalogFilters } from './components/CatalogFilters/index.js';
import { CatalogPageFiltersContainer } from './CaralogPage.styled.jsx';

export const CatalogPage = () => {
  return (
    <CatalogLayout>
      <CatalogPageFiltersContainer>
        <CatalogFilters />
      </CatalogPageFiltersContainer>
    </CatalogLayout>
  );
};
