import { CatalogLayout } from '../../components/Layout/CatalogLayout/index.js';

import { CardsContainer } from '../CatalogPage/CaralogPage.styled.jsx';
import { CarCard } from '../../components/CarCard/CarCard.jsx';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors/cars.selector.js';
import { useEffect, useState } from 'react';
import { FavoritesTextWrapper } from './FavoritesPage.styled.jsx';

export const FavoritesPage = () => {
  const [localData, setLocalData] = useState([]);
  const data = useSelector(selectFavorites);

  useEffect(() => {
    setLocalData(data);
  }, []);

  return (
    <CatalogLayout>
      <FavoritesTextWrapper>My Favorite Cars</FavoritesTextWrapper>
      <CardsContainer style={{ paddingTop: '50px' }}>
        {localData?.map(carItem => (
          <CarCard key={carItem.id} carInfo={carItem} />
        ))}
      </CardsContainer>
    </CatalogLayout>
  );
};
