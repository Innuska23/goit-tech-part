import {
  ButtonContainer,
  CarCardContainer,
  CarCardImage,
  CardsInfoContainer,
  CardsInfoItem,
  CarModel,
  CarName,
  CarNameAndPriceContainer,
} from './CarCard.styled.jsx';
import { Button } from '../Button/index.js';

export const CarCard = ({
  carInfo: {
    id,
    year,
    make,
    model,
    img,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    functionalities,
  },
}) => {
  const addressList = address.split(', ').slice(-2);
  const func = functionalities
    .reduce(function (a, b) {
      return a.length <= b.length ? a : b;
    })
    .split(' ')
    .slice(0, 2)
    .join(' ');

  console.log(func);
  const options = [...addressList, rentalCompany, type, model, mileage, func];

  const options1 = options.slice(0, 4);
  const options2 = options.slice(4, 8);
  return (
    <CarCardContainer>
      <CarCardImage src={img} />

      <CarNameAndPriceContainer>
        <CarName>
          {make} <CarModel>{model}</CarModel>, {year}
        </CarName>

        <CarName>{rentalPrice}</CarName>
      </CarNameAndPriceContainer>

      <CardsInfoContainer>
        {options.map(item => (
          <CardsInfoItem>{item}</CardsInfoItem>
        ))}
      </CardsInfoContainer>

      <ButtonContainer>
        <Button>Learn more</Button>
      </ButtonContainer>
    </CarCardContainer>
  );
};
