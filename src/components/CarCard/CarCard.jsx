import {
  ButtonContainer,
  CarCardContainer,
  CarCardImage,
  CardsInfoContainer,
  CardsInfoItem,
  CarIconButton,
  CarImageIcon,
  CarModel,
  CarName,
  CarNameAndPriceContainer,
} from './CarCard.styled.jsx';
import { Button } from '../Button/index.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors/cars.selector.js';

import favoriteActiveSrc from '../../assets/favorite-active.svg';
import favoriteNormalSrc from '../../assets/favorite-normal.svg';
import { calendarTaskActions } from '../../redux/reducers/cars.slice.js';

export const CarCard = ({ carInfo }) => {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();
  const isFavorites =
    favorites.findIndex(item => item.id === carInfo.id) !== -1;

  const addressList = carInfo.address.split(', ').slice(-2);
  const func = carInfo.functionalities
    .reduce(function (a, b) {
      return a.length <= b.length ? a : b;
    })
    .split(' ')
    .slice(0, 2)
    .join(' ');

  const options = [
    ...addressList,
    carInfo.rentalCompany,
    carInfo.type,
    carInfo.model,
    carInfo.mileage,
    func,
  ];

  const handleFavoriteClick = () => {
    if (isFavorites) {
      dispatch(calendarTaskActions.removeFavorites(carInfo));

      return;
    }
    dispatch(calendarTaskActions.addFavorites(carInfo));
  };

  return (
    <CarCardContainer>
      <CarCardImage src={carInfo.img} />

      <CarIconButton onClick={handleFavoriteClick}>
        <CarImageIcon
          src={isFavorites ? favoriteActiveSrc : favoriteNormalSrc}
        />
      </CarIconButton>

      <CarNameAndPriceContainer>
        <CarName>
          {carInfo.make} <CarModel>{carInfo.model}</CarModel>, {carInfo.year}
        </CarName>

        <CarName>{carInfo.rentalPrice}</CarName>
      </CarNameAndPriceContainer>

      <CardsInfoContainer>
        {options.map((item, i) => (
          <CardsInfoItem key={i}>{item}</CardsInfoItem>
        ))}
      </CardsInfoContainer>

      <ButtonContainer>
        <Button>Learn more</Button>
      </ButtonContainer>
    </CarCardContainer>
  );
};
