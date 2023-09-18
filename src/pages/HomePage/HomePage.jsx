import { ROUTER_URL_LIST } from '../../constants/index.js';
import { Link } from 'react-router-dom';
import { CatalogLayout } from '../../components/Layout/CatalogLayout/index.js';
import { HomePageContainer, HomePageImage } from './HomePage.styled.jsx';
import rentImg from '../../assets/rent_a_car.jpg';

export const HomePage = () => {
  return (
    <CatalogLayout>
      <HomePageContainer>
        <HomePageImage src={rentImg} />
      </HomePageContainer>
    </CatalogLayout>
  );
};
