import { CatalogLayout } from '../../components/Layout/CatalogLayout/index.js';
import { CatalogFilters } from './components/CatalogFilters/index.js';
import {
  BoardContainer,
  CardsContainer,
  CatalogPageFiltersContainer,
} from './CaralogPage.styled.jsx';
import { useCarsListQuery } from '../../redux/api/carsAPI.js';
import { CarCard } from '../../components/CarCard/CarCard.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCarsFilter,
  selectQueryParams,
} from '../../redux/selectors/cars.selector.js';
import { filterCars } from '../../utils';
import { Button } from '../../components/Button/index.js';
import { calendarTaskActions } from '../../redux/reducers/cars.slice.js';

export const CatalogPage = () => {
  const dispatch = useDispatch();

  const carsParams = useSelector(selectQueryParams);
  const filters = useSelector(selectCarsFilter);

  const { carList } = useCarsListQuery(carsParams, {
    selectFromResult: ({ data }) => ({
      carList: data?.filter(car => filterCars(car, filters)),
    }),
  });

  const handleLoadMoreClick = () => {
    dispatch(
      calendarTaskActions.setQueryParams({
        ...carsParams,
        limit: carsParams.limit + 8,
      })
    );
  };

  return (
    <CatalogLayout>
      <CatalogPageFiltersContainer>
        <CatalogFilters />
      </CatalogPageFiltersContainer>

      <CardsContainer>
        {carList?.map((carItem, i) => (
          <CarCard key={`${carItem.id}_${i}`} carInfo={carItem} />
        ))}
      </CardsContainer>

      <BoardContainer>
        {carList?.length === carsParams.limit && (
          <Button onClick={handleLoadMoreClick} width={274}>
            Load more
          </Button>
        )}
      </BoardContainer>
    </CatalogLayout>
  );
};
