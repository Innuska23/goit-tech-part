import styled from '@emotion/styled';

export const CatalogPageFiltersContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing(1)};
  grid-template-columns: repeat(4, minmax(8px, 1fr));
`;

export const BoardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-block: ${({ theme }) => theme.spacing(9)};
`;
