import {
  Container,
  LayoutHeader,
  LayoutNavContainer,
  LayoutNavItem,
  LayoutNavLink,
  LayoutNavList,
  LayoutTitle,
} from './CatalogLayout.styled.jsx';
import { ROUTER_URL_LIST } from '../../../constants/index.js';

export const CatalogLayout = ({ children }) => {
  return (
    <Container>
      <LayoutHeader>
        <LayoutTitle>Rent service</LayoutTitle>

        <LayoutNavContainer>
          <LayoutNavList>
            <LayoutNavItem>
              <LayoutNavLink to={ROUTER_URL_LIST.HOME}>Home</LayoutNavLink>
            </LayoutNavItem>

            <LayoutNavItem>
              <LayoutNavLink to={ROUTER_URL_LIST.CATALOG}>
                Catalog
              </LayoutNavLink>
            </LayoutNavItem>

            <LayoutNavItem>
              <LayoutNavLink to={ROUTER_URL_LIST.FAVORITES}>
                Favorites
              </LayoutNavLink>
            </LayoutNavItem>
          </LayoutNavList>
        </LayoutNavContainer>
      </LayoutHeader>
      {children}
    </Container>
  );
};
