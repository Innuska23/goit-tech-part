import styled from '@emotion/styled';

export const StyledButton = styled.button`
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

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue1};
  }
`;
