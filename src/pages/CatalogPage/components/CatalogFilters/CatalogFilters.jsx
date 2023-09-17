import {
  CatalogFieldContainer,
  CatalogFiltersContainer,
} from './CatalogFilters.styled.jsx';
import { Button } from '../../../../components/Button/index.js';
import { FieldSelect } from '../../../../components/FieldSelect/index.js';
import { FieldLabel } from '../../../../components/FieldLable/index.js';
import { FieldRange } from '../../../../components/FieldRange/index.js';

export const CatalogFilters = () => {
  return (
    <CatalogFiltersContainer>
      <CatalogFieldContainer width={224}>
        <FieldLabel label='Car brand'>
          <FieldSelect options={[{ title: 'title' }]} />
        </FieldLabel>
      </CatalogFieldContainer>

      <CatalogFieldContainer width={125}>
        <FieldLabel label='Price/1 hour'>
          <FieldSelect options={[{ title: 'title' }]} />
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
