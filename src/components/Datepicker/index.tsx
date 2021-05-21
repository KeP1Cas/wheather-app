import React, { useState } from "react";

import { StyledDatepicker, DatepickerContainer } from "./styled";

type Props = {};

const Datepicker: React.FC<Props> = () => {
  const [date, setDate] = useState("");
  const [hasFocus, setHasFocus] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const onFocus = () => {
    setHasFocus(true);
  };

  const onBlur = () => {
    setHasFocus(false);
  };

  return (
    <DatepickerContainer>
      <StyledDatepicker
        onChange={onChange}
        placeholder="Select Date"
        value={date}
        onFocus={onFocus}
        onBlur={onBlur}
        type={hasFocus ? "date" : "text"}
        onClick={(e: React.MouseEvent) => console.log("Click!")}
      />
    </DatepickerContainer>
  );
};

export { Datepicker };
