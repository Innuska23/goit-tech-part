import {
  CatalogFieldContainer,
  CatalogFiltersContainer,
} from './CatalogFilters.styled.jsx';

import { useCarsListQuery } from '../../../../redux/api/carsAPI.js';

import { Button } from '../../../../components/Button/index.js';
import { FieldSelect } from '../../../../components/FieldSelect/index.js';
import { FieldLabel } from '../../../../components/FieldLable/index.js';
import { FieldRange } from '../../../../components/FieldRange/index.js';

export const CatalogFilters = () => {
  const { data } = useCarsListQuery();

  const rates =
    data?.map(({ rentalPrice }) => parseFloat(rentalPrice.split('$')[1])) || [];
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
  console.log(min, max, rates, length);

  return (
    <CatalogFiltersContainer>
      <CatalogFieldContainer width={224}>
        <FieldLabel label='Car brand'>
          <FieldSelect options={data} displayKey='make' />
        </FieldLabel>
      </CatalogFieldContainer>

      <CatalogFieldContainer width={125}>
        <FieldLabel label='Price/1 hour'>
          <FieldSelect options={rateOptions} displayKey='value' />
        </FieldLabel>
      </CatalogFieldContainer>

      <CatalogFieldContainer width={320}>
        <FieldLabel label='Сar mileage / km'>
          <FieldRange />
        </FieldLabel>
      </CatalogFieldContainer>

      <Button width={320}>Search</Button>
    </CatalogFiltersContainer>
  );
};
