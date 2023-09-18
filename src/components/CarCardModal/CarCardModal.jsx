import {
  CarCardBackdrop,
  CarCardContainer,
  CarCardModalContainer,
  CardsInfoCondition,
  StyledLink,
} from './CarCardModal.styled.jsx';
import {
  ButtonContainer,
  CarCardImage,
  CardsInfoContainer,
  CardsInfoItem,
  CarIconButton,
  CarImageIcon,
  CarModel,
  CarName,
  CarNameAndPriceContainer,
} from '../CarCard/CarCard.styled.jsx';
import closeSrc from '../../assets/close.svg';

import { Button } from '../Button/index.js';
import { useCallback, useEffect } from 'react';

// {
//     "id": 9582,
//     "year": 2008,
//     "make": "Buick",
//     "model": "Enclave",
//     "type": "SUV",
//     "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/buick_enclave.jpg",
//     "description": "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",
//     "fuelConsumption": "10.5",
//     "engineSize": "3.6L V6",
//     "accessories": [
//     "Leather seats",
//     "Panoramic sunroof",
//     "Premium audio system"
// ],
//     "functionalities": [
//     "Power liftgate",
//     "Remote start",
//     "Blind-spot monitoring"
// ],
//     "rentalPrice": "$40",
//     "rentalCompany": "Luxury Car Rentals",
//     "address": "123 Example Street, Kiev, Ukraine",
//     "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit required",
//     "mileage": 5858
// },

export const CarCardModal = ({ onClose, carInfo }) => {
  const escFunction = useCallback(event => {
    if (event.key === 'Escape') {
      onClose && onClose();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [escFunction]);

  const addressList = carInfo.address.split(', ').slice(-2);

  const options = [
    ...addressList,
    `Id: ${carInfo.id}`,
    `Year: ${carInfo.year}`,
    `Type: ${carInfo.type}`,
    `Fuel Consumption: ${carInfo.fuelConsumption}`,
    `Engine size: ${carInfo.engineSize}`,
  ];

  const rentalConditions = carInfo.rentalConditions.split('\n');

  const rentalConditionOptions = [
    ...rentalConditions,
    `Mileage: ${carInfo.mileage}`,
    `Price: ${carInfo.rentalPrice}`,
  ];

  return (
    <CarCardModalContainer>
      <CarCardBackdrop onClick={() => onClose && onClose()} />

      <CarCardContainer>
        <CarIconButton onClick={() => onClose && onClose()}>
          <CarImageIcon src={closeSrc} />
        </CarIconButton>
        <CarCardImage src={carInfo.img} />

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

        <p>{carInfo.description}</p>

        <p>Accessories and functionalities:</p>
        <CardsInfoContainer>
          {carInfo.functionalities?.map((item, i) => (
            <CardsInfoItem key={i}>{item}</CardsInfoItem>
          ))}
        </CardsInfoContainer>

        <p>Rental Conditions:</p>
        <CardsInfoContainer>
          {rentalConditionOptions.map((item, i) => (
            <CardsInfoCondition key={i}>{item}</CardsInfoCondition>
          ))}
        </CardsInfoContainer>

        <StyledLink width={168} href='tel:+380730000000'>
          Rent car
        </StyledLink>
      </CarCardContainer>
    </CarCardModalContainer>
  );
};
