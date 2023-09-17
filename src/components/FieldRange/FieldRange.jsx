import { FieldRangeContainer, StyledField } from './FieldRange.styled.jsx';
import { useState } from 'react';

export const FieldRange = ({}) => {
  const [fromValue, setFromValue] = useState();
  const [toValue, setToValue] = useState();

  const handleChangeValue = isTo => e => {
    if (isTo) {
      setToValue(parseFloat(e.currentTarget.value));
      return;
    }

    setFromValue(parseFloat(e.currentTarget.value));
  };

  return (
    <FieldRangeContainer>
      <StyledField
        type='number'
        onChange={handleChangeValue()}
        value={fromValue}
      />
      <StyledField
        type='number'
        onChange={handleChangeValue(true)}
        value={toValue}
      />
    </FieldRangeContainer>
  );
};
