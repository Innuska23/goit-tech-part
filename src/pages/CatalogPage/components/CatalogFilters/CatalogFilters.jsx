import {
  CatalogFieldContainer,
  CatalogFiltersContainer,
} from './CatalogFilters.styled.jsx';

import { useCarsListQuery } from '../../../../redux/api/carsAPI.js';

import { Button } from '../../../../components/Button/index.js';
import { FieldSelect } from '../../../../components/FieldSelect/index.js';
import { FieldLabel } from '../../../../components/FieldLable/index.js';
import { FieldRange } from '../../../../components/FieldRange/index.js';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCarsFilter,
  selectQueryParams,
} from '../../../../redux/selectors/cars.selector.js';
import { calendarTaskActions } from '../../../../redux/reducers/cars.slice.js';
import { useState } from 'react';
import { filterCars } from '../../../../utils/index.js';

export const CatalogFilters = () => {
  const dispatch = useDispatch();
  const carsParams = useSelector(selectQueryParams);
  const filters = useSelector(selectCarsFilter);
  const { carList } = useCarsListQuery(carsParams, {
    selectFromResult: ({ data }) => ({
      carList: data?.filter(car => filterCars(car, filters)),
    }),
  });

  const [make, setMake] = useState(null);
  const [priceTo, setPriceTo] = useState(0);
  const [range, setRange] = useState({ fromValue: 0, toValue: 0 });

  const rates =
    carList?.map(({ rentalPrice }) => parseFloat(rentalPrice.split('$')[1])) ||
    [];
  const min = Math.min(...rates);
  const max = Math.max(...rates);
  const rateOptions = [];
  if (rates.length && min && max) {
    let counter = min;
    do {
      rateOptions.push({ id: counter, value: `$${counter}` });
      counter += 10;
    } while (counter < max);
  }

  const handleSetFilter = () => {
    dispatch(
      calendarTaskActions.setFilters({
        make,
        price: priceTo,
        range: { from: range.fromValue, to: range.toValue },
      })
    );
  };
  const handleResetFilter = () => {
    dispatch(dispatch(calendarTaskActions.resetFilters()));
  };

  return (
    <CatalogFiltersContainer>
      <CatalogFieldContainer width={224}>
        <FieldLabel label='Car brand'>
          <FieldSelect
            options={carList}
            displayKey='make'
            onSelect={({ make }) => setMake(make)}
          />
        </FieldLabel>
      </CatalogFieldContainer>

      <CatalogFieldContainer width={125}>
        <FieldLabel label='Price/1 hour'>
          <FieldSelect
            options={rateOptions}
            displayKey='value'
            onSelect={({ id }) => setPriceTo(id)}
          />
        </FieldLabel>
      </CatalogFieldContainer>

      <CatalogFieldContainer width={320}>
        <FieldLabel label='Сar mileage / km'>
          <FieldRange onSelect={setRange} values={range} />
        </FieldLabel>
      </CatalogFieldContainer>

      <Button width={320} onClick={handleSetFilter}>
        Search
      </Button>

      <Button width={320} onClick={handleResetFilter}>
        Reset filter
      </Button>
    </CatalogFiltersContainer>
  );
};
