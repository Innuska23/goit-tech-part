import styled from '@emotion/styled';

export const HomePageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: column;
`;

export const HomeText = styled.h1`
  display: flex;
  font-size: 60px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  text-shadow: 1px 1px 2px black;
`
export const HomeTextWrapper = styled.h2`
  margin-top: 20px;
  display: flex;
  line-height: 1.5;
  font-weight: 400;
  justify-content: center;
  align-items: center;
`;

export const HomePageImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -5%);
  z-index:-1;
  width: 650px;
`;
