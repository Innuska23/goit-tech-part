import { FieldLabelContainer, FieldLabelText } from './FieldLabel.styled.jsx';

export const FieldLabel = ({ children, label }) => {
  return (
    <FieldLabelContainer>
      <FieldLabelText>{label}</FieldLabelText>
      {children}
    </FieldLabelContainer>
  );
};
