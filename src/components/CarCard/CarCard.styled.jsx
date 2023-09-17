import styled from '@emotion/styled';

export const CarCardContainer = styled.div`
  display: flex;
  height: 426px;
  width: 274px;
`;

export const CarImageIcon = styled.img`
  width: 18px;
  height: 18px;
`;

export const CarCardImage = styled.img`
  height: 268px;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius(1)};
`;

export const CarName = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

export const CarModel = styled.span`
  font-family: Inter sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;
