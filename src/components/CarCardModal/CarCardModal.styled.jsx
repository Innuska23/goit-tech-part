import styled from '@emotion/styled';

export const CarCardModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${({ theme }) => theme.zIndexes.modal};
  overflow: hidden;
`;

export const CarCardBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #12141780;
`;

export const CarCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(7)};
  position: relative;
  margin: auto;
  margin-top: 150px;
  width: 541px;
  border-radius: ${({ theme }) => theme.borderRadius(1)};
  padding: ${({ theme }) => theme.spacing(20)};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ButtonContainer = styled.div`
  margin-top: auto;
`;

export const StyledLink = styled.a`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue2};
  border: none;
  padding: 0;
  padding-inline: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.borderRadius(1)};
  transition: all 0.3s ease-in-out;
  height: 44px;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue1};
  }
`;

export const CardsInfoCondition = styled.span`
  font-size: 12px;
  padding-inline: ${({ theme }) => theme.spacing(7)};
  padding-block: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.grey1};
  color: ${({ theme }) => theme.colors.secondaryText};
  border-radius: ${({ theme }) => theme.borderRadius(1)};
`;
