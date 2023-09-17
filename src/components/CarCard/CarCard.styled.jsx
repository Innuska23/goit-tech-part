import styled from '@emotion/styled';

export const CarCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 426px;
  width: 274px;
  margin-bottom: 50px;
`;

export const CarImageIcon = styled.img`
  width: 18px;
  height: 18px;
`;

export const CarIconButton = styled.button`
  border: none;
  background: transparent;
  height: 18px;
  width: 18px;
`;

export const CarCardImage = styled.img`
  object-fit: cover;
  max-height: 268px;
  height: 100%;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius(1)};
`;

export const CarNameAndPriceContainer = styled.div`
  margin-block: 14px 8px;
  display: flex;
  justify-content: space-between;
`;
export const CarName = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

export const CarModel = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  color: ${({ theme }) => theme.colors.blue2};
  text-align: left;
`;

export const CardsInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.colors.secondaryText};
  margin-bottom: 4px;
`;

export const CardsInfoItem = styled.span`
  white-space: nowrap;
  padding-right: 6px;
  margin-right: 6px;
  font-size: 12px;
  border-right: 1px solid ${({ theme }) => theme.colors.secondaryText};
  overflow: hidden;
  text-overflow: ellipsis;

  &:last-of-type {
    border: none;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: auto;
`;
