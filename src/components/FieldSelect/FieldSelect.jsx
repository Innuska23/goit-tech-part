import { useRef, useState } from 'react';

import {
  ChevronIcon,
  FieldOption,
  FieldOptionsContainer,
  FieldSelectorContainer,
  FieldSelectorInput,
} from './FieldSelect.styled.jsx';
import { useOutsideClick } from '../../hooks/useOutsideClick.js';
import chevronIcon from '../../assets/chevron-down.svg';

export const FieldSelect = ({ options = [], onSelect, displayKey = 'id' }) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [filterOptionsValue, setFilterOptionsValue] = useState('');
  const [isShowOptions, setIsShowOptions] = useState(false);
  const ref = useOutsideClick(() => setIsShowOptions(false));
  const handleChangeInput = e => {
    setFilterOptionsValue(e.currentTarget.value);
    setSelectedValue(e.currentTarget.value);
  };

  const filteredOptions = filterOptionsValue
    ? options.filter(options =>
        options[displayKey].includes(filterOptionsValue)
      )
    : options;

  const handleOptionClick = option => () => {
    setSelectedValue(option[displayKey]);
    onSelect && onSelect(option);
  };

  return (
    <FieldSelectorContainer>
      <FieldSelectorInput
        onChange={handleChangeInput}
        value={selectedValue}
        onFocus={() => setIsShowOptions(true)}
      />

      <ChevronIcon src={chevronIcon} alt='icon' isShow={isShowOptions} />

      {isShowOptions && (
        <FieldOptionsContainer isShow={isShowOptions} ref={ref}>
          {!filteredOptions.length && filterOptionsValue && (
            <FieldOption>Not found</FieldOption>
          )}

          {filteredOptions?.map(option => (
            <FieldOption
              key={option.id}
              isSelected={option.id === selectedValue.id}
              onClick={handleOptionClick(option)}
              isSelectable
            >
              {option[displayKey]}
            </FieldOption>
          ))}
        </FieldOptionsContainer>
      )}
    </FieldSelectorContainer>
  );
};
