import styled from '@emotion/styled';

import { FieldSelectorInput } from '../FieldSelect/FieldSelect.styled.jsx';

export const FieldRangeContainer = styled.div`
  display: flex;
  max-height: 48px;
`;
export const StyledField = styled(FieldSelectorInput)`
  border-radius: 0;
  width: 100%;

  &:first-of-type {
    border-top-left-radius: ${({ theme }) => theme.borderRadius(1)};
    border-bottom-left-radius: ${({ theme }) => theme.borderRadius(1)};
    border-right: 1px solid ${({ theme }) => theme.colors.secondaryText};
  }
  &:last-of-type {
    border-top-right-radius: ${({ theme }) => theme.borderRadius(1)};
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius(1)};
  }
`;
