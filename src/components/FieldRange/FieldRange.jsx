import { FieldRangeContainer, StyledField } from './FieldRange.styled.jsx';
import { useEffect, useRef, useState } from 'react';

export const FieldRange = ({ onSelect, values }) => {
  const refTimeoutId = useRef(null);
  const [fromValue, setFromValue] = useState(null);
  const [toValue, setToValue] = useState(null);

  const handleChangeValue = isTo => e => {
    if (isTo) {
      setToValue(parseFloat(e.currentTarget.value));
      return;
    }

    setFromValue(parseFloat(e.currentTarget.value));
  };

  useEffect(() => {
    if (refTimeoutId.current) {
      clearTimeout(refTimeoutId.current);
    }

    refTimeoutId.current = setTimeout(() => {
      onSelect({ fromValue: fromValue, toValue: toValue });
    }, 300);
  }, [fromValue, toValue]);

  useEffect(() => {
    setToValue(values.toValue || null);
    setFromValue(values.fromValue || null);
  }, [values]);

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
