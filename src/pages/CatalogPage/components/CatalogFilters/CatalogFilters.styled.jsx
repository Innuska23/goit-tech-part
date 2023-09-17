import styled from '@emotion/styled';

export const CatalogFiltersContainer = styled.div`
  display: flex;
  align-items: end;
  width: 100%;
  height: 74px;
  max-width: 859px;
  margin: auto;
  gap: ${({ theme }) => theme.spacing(9)};
`;

export const CatalogFieldContainer = styled.div`
  max-width: ${({ width }) => `${width}px`};
`;
