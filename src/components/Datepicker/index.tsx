import React, { useState, useRef } from "react";

import {
  StyledDatepicker,
  DatepickerContainer,
  StyledCalendarIcon,
} from "./styled";

type Props = {
  onChange: (date: string) => void;
  value: string;
};

const Datepicker: React.FC<Props> = ({ onChange, value }) => {
  const [hasFocus, setHasFocus] = useState(false);

  const textInputRef = useRef({} as HTMLInputElement);

  const onClickCalendarIcon = () => {
    if (textInputRef.current) {
      textInputRef.current.focus();
      setHasFocus(true);
    }
  };

  const onFocus = () => {
    setHasFocus(true);
  };

  const onBlur = () => {
    setHasFocus(false);
  };

  const onChangeInner = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const getTextInputDateFormat = (dateString?: string) => {
    if (!dateString) {
      return;
    }

    const [year, month, day] = dateString.split("-");

    return `${month} / ${day} / ${year}`;
  };

  const valueInner = hasFocus ? value : getTextInputDateFormat(value);

  const today = new Date().toISOString().split("T")[0];
  const pastWeekDate = new Date(new Date().getTime() - 4 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  return (
    <DatepickerContainer>
      <StyledDatepicker
        ref={textInputRef}
        onChange={onChangeInner}
        placeholder="Select Date"
        value={valueInner as any}
        onFocus={onFocus}
        onBlur={onBlur}
        type={hasFocus ? "date" : "text"}
        min={pastWeekDate}
        max={today}
      />
      <StyledCalendarIcon onClick={onClickCalendarIcon} hasFocus={hasFocus} />
    </DatepickerContainer>
  );
};

export { Datepicker };
