import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  max-width: 1184px;
  width: 100%;
  height: 100%;
`;

export const LayoutTitle = styled.h1``;

export const LayoutHeader = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  padding-block: ${({ theme }) => theme.spacing(4)};
`;

export const LayoutNavContainer = styled.nav`
  display: block;
`;
export const LayoutNavList = styled.ul`
  display: flex;
`;

export const LayoutNavItem = styled.li`
  padding: ${({ theme }) => theme.spacing(4)};
`;

export const LayoutNavLink = styled(NavLink)`
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme }) => theme.colors.blue2};
  text-decoration: none;

  &.active {
    color: ${({ theme }) => theme.colors.blue1};
    text-decoration: underline;
  }
`;
