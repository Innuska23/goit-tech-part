import { CatalogLayout } from '../../components/Layout/CatalogLayout/index.js';
import { CatalogFilters } from './components/CatalogFilters/index.js';
import {
  CardsContainer,
  CatalogPageFiltersContainer,
} from './CaralogPage.styled.jsx';
import { useCarsListQuery } from '../../redux/api/carsAPI.js';
import { CarCard } from '../../components/CarCard/CarCard.jsx';

export const CatalogPage = () => {
  const { data } = useCarsListQuery();

  return (
    <CatalogLayout>
      <CatalogPageFiltersContainer>
        <CatalogFilters />
      </CatalogPageFiltersContainer>

      <CardsContainer>
        {data?.map(carItem => (
          <CarCard carInfo={carItem} />
        ))}
      </CardsContainer>
    </CatalogLayout>
  );
};
