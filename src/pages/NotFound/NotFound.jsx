import { CatalogLayout } from '../../components/Layout/CatalogLayout/index.js';
import { HomePageContainer, HomeText } from '../HomePage/HomePage.styled.jsx';

export const NotFound = () => {
  return (
    <CatalogLayout>
      <HomePageContainer>
        <HomeText>404 Not Found</HomeText>
      </HomePageContainer>
    </CatalogLayout>
  );
};
