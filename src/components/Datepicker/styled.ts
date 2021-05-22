import styled from "styled-components";
import { DESIGN_VARS } from "../../constants";
import CalendarIcon, {
  ReactComponent as CalendarIconComponent,
} from "../../assets/icons/calendar.svg";

const DatepickerContainer = styled.div`
  position: relative;
  width: min-content;
`;

const StyledDatepicker = styled.input`
  background: rgba(128, 131, 164, 0.06);
  border: 2px solid rgba(128, 131, 164, 0.2);
  border-radius: 8px;
  color: ${({ value }: { value?: string }) =>
    value ? DESIGN_VARS.color.darkBlue : DESIGN_VARS.color.grey};
  padding: 12px 16px;
  width: 252px;
  outline: none;
  font-size: 16px;
  font-weight: 400;
  appearance: none;
  max-height: 46px;

  ::-webkit-calendar-picker-indicator {
    margin: 0;
    padding: 0;
    position: relative;
    left: 4px;
    opacity: ${({ value }) => (value ? "1" : "0.6")};
    background-size: 16px;
    cursor: pointer;
    background-image: url("${CalendarIcon}");
  }

  :focus {
    border: 2px solid #373af5;
  }
`;

const StyledCalendarIcon = styled(CalendarIconComponent)<{ hasFocus: boolean }>`
  position: absolute;
  display: ${({ hasFocus }) => (hasFocus ? "none" : "block")};
  right: 1px;
  top: calc(50% - 2px);
  transform: translate(-100%, -50%);
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export { DatepickerContainer, StyledDatepicker, StyledCalendarIcon };
