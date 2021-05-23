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
  values: SelectValue[];
  placeholder: string;
};

const Select: React.FC<Props> = ({ values, placeholder }) => {
  const [isActive, setIsActive] = useState(false);
  const [activeOption, setActiveOption] = useState<number | string>("");

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
    setActiveOption(value);
  };

  return (
    <SelectContainer ref={selectContainerRef} onClick={onClick} onBlur={onBlur}>
      <StyledSelect
        readOnly
        placeholder={placeholder}
        value={`${activeOption}`}
      />
      <SelectDropdownContainer isActive={isActive}>
        <SelectDropdown>
          {values.map(({ title, value }, idx) => (
            <SelectOption
              isActive={activeOption === value}
              onClick={() => onClickOption(value)}
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
