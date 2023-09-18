import { CatalogLayout } from '../../components/Layout/CatalogLayout/index.js';
import { HomePageContainer, HomePageImage, HomeText, HomeTextWrapper } from './HomePage.styled.jsx';
import rentImg from '../../assets/rent_a_car.jpg';

export const HomePage = () => {
  return (
    <CatalogLayout>
      <HomePageContainer>
        <HomeText>Welcome to Rent service car!</HomeText>
        <HomeTextWrapper>We offer a wide selection of quality rental cars in Ukraine. <br /> Our mission is to make your journey comfortable and unforgettable.</HomeTextWrapper>
        <HomePageImage src={rentImg} />
      </HomePageContainer>
    </CatalogLayout>
  );
};
