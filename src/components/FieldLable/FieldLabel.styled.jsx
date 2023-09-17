import styled from '@emotion/styled';

export const FieldLabelContainer = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const FieldLabelText = styled.span`
  color: ${({ theme }) => theme.colors.secondaryText};
`;
