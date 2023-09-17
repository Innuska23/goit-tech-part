import styled from '@emotion/styled';

export const FieldSelectorContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 48px;
`;

export const FieldSelectorInput = styled.input`
  display: block;
  border: none;
  padding-inline: ${({ theme }) => theme.spacing(9)};
  padding-block: ${({ theme }) => theme.spacing(7)};
  border-radius: ${({ theme }) => theme.borderRadius(1)};
  background-color: ${({ theme }) => theme.colors.grey1};
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primaryText};
  outline: none;
`;

export const ChevronIcon = styled.img`
  position: absolute;
  top: calc(50% - 10px);
  right: ${({ theme }) => theme.spacing(7)};
  width: 20px;
  height: 20px;
  transform: ${({ isShow }) => (isShow ? 'rotate(180deg)' : 0)};
`;

export const FieldOptionsContainer = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: ${({ isShow }) => (isShow ? 'flex' : 'none')};
  top: 56px;
  flex-direction: column;
  max-height: 272px;
  overflow-y: auto;
  border-radius: ${({ theme }) => theme.borderRadius(1)};
  padding-inline: ${({ theme }) => theme.spacing(9)};
  padding-block: ${({ theme }) => theme.spacing(7)};
  border: 1px solid ${({ theme }) => theme.colors.secondaryText};
  background-color: white;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndexes.modal - 1};
`;

export const FieldOption = styled.span`
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 16px;
  line-height: 20px;
  cursor: ${({ isSelectable }) => (isSelectable ? 'pointer' : 'default')}};
`;
