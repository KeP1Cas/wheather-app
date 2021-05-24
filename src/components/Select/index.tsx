import React, { useState, useRef } from "react";

import {
  StyledSelect,
  SelectContainer,
  StyledChevron,
  SelectDropdown,
  SelectOption,
  SelectDropdownContainer,
} from "./styled";

export type SelectValue = {
  value: string | number;
  title: string | number;
};

type Props = {
  options: SelectValue[];
  placeholder: string;
  onChange: (value: any) => void;
  value: string;
};

const Select: React.FC<Props> = ({ options, placeholder, onChange, value }) => {
  const [isActive, setIsActive] = useState(false);

  const selectContainerRef = useRef({} as HTMLDivElement);

  const onClick = () => {
    setIsActive(true);
  };

  /**
   * Дело в том, что дропдаун уходит в display: none из-за onBlur, раньше, чем обработается клик по SelectOption,
   * поэтому необходима небольшая задержка, перед тем, как дропдаун исчезнет. Проблема заключается в упрощенной реализации скрытия дропдауна,
   * будь у меня больше времени - я бы реализовал скрытие дропдауна через прослушку кликов вне элемента через document.addEventListener("click" ...)
   * Я попробовал, но столкнулся с некоторыми сложностями в работе моего решения "на скорую руку" через вышеупомянутый способ
   */
  const onBlur = () => {
    setTimeout(() => {
      setIsActive(false);
    }, 100);
  };

  const onClickOption = (value: string | number) => {
    onChange(value);
  };

  return (
    <SelectContainer ref={selectContainerRef} onClick={onClick} onBlur={onBlur}>
      <StyledSelect readOnly placeholder={placeholder} value={`${value}`} />
      <SelectDropdownContainer isActive={isActive}>
        <SelectDropdown>
          {options.map(({ title, value: optionValue }, idx) => (
            <SelectOption
              isActive={optionValue === value}
              onClick={() => onClickOption(optionValue)}
              key={idx}
            >
              {title}
            </SelectOption>
          ))}
        </SelectDropdown>
      </SelectDropdownContainer>
      <StyledChevron isActive={isActive} />
    </SelectContainer>
  );
};

export { Select };
