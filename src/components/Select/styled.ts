import styled from "styled-components";

import { ReactComponent as Chevron } from "../../assets/icons/chevron-bottom.svg";

import { DESIGN_VARS } from "../../constants";

const SelectContainer = styled.div`
  position: relative;
  width: min-content;
`;

const StyledSelect = styled.input`
  background: rgba(128, 131, 164, 0.06);
  border: 2px solid rgba(128, 131, 164, 0.2);
  border-radius: 8px;
  color: ${({ value }) =>
    value ? DESIGN_VARS.color.darkBlue : DESIGN_VARS.color.grey};
  padding: 12px 16px;
  width: 252px;
  outline: none;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;

  :focus {
    border: 2px solid #373af5;
  }
`;

const StyledChevron = styled(Chevron)<{ isActive: boolean }>`
  position: absolute;
  right: 0;
  top: 50%;
  transform: ${({ isActive }) =>
    isActive
      ? "translate(-100%, -50%) rotate(180deg)"
      : "translate(-100%, -50%)"};
`;

const SelectDropdownContainer = styled.div<{ isActive: boolean }>`
  background: ${DESIGN_VARS.color.white};
  display: ${({ isActive }) => (isActive ? "block" : "none")};
`;

const SelectDropdown = styled.ul`
  bottom: -12px;
  left: 0;
  position: absolute;
  border: 2px solid rgba(128, 131, 164, 0.06);
  box-shadow: 0px 2px 4px rgba(4, 5, 73, 0.16),
    14px 14px 20px rgba(5, 6, 114, 0.08);
  border-radius: 8px;
  transform: translateY(100%);
  padding: 6px;
  display: flex;
  flex-direction: column;
  width: 252px;
  background: ${DESIGN_VARS.color.white};
  max-height: 160px;
  overflow-y: scroll;
  z-index: 1;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: white;
  }

  ::-webkit-scrollbar-thumb {
    width: 4px;
    height: 28px;
    background: #8083a4;
    opacity: 0.4;
    border-radius: 38px;
  }

  ::-webkit-scrollbar-thumb:hover {
    cursor: pointer;
  }
`;

const SelectOption = styled.li<{ isActive: boolean }>`
  width: 100%;
  background: ${({ isActive }) =>
    isActive ? "rgba(128, 131, 164, 0.06)" : "white"};
  cursor: pointer;
  padding: 6px 10px;
  border-radius: 8px;
  margin-bottom: 6px;
  line-height: 24px;
  font-weight: 400;
  color: ${DESIGN_VARS.color.darkBlue};

  :last-child {
    margin-bottom: 0;
  }

  :hover {
    background: rgba(128, 131, 164, 0.06);
  }
`;

export {
  StyledSelect,
  SelectContainer,
  StyledChevron,
  SelectDropdown,
  SelectDropdownContainer,
  SelectOption,
};
