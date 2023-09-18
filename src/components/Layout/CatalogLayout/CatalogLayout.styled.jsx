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

export const LayoutTitle = styled.h1`
    color: ${({ theme }) => theme.colors.white};

`;

export const LayoutHeader = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  padding-block: ${({ theme }) => theme.spacing(4)};

  &:before{
    z-index: -1;
    content: "";
    position: absolute;
    width: 100vw;
    height: 50px;
    top: 0px;
    left: calc(50% - 50vw);
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blue2};
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
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
font-family: "Manrope";
font-size: 20px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
color: ${({ theme }) => theme.colors.white};
text-decoration: none;

  &.active {
  font-family: "Manrope";
  font-size: 20px;
  text-shadow: 1px 1px 2px black;
}
`;
