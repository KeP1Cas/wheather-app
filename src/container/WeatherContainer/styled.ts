import styled from "styled-components";
import { DESIGN_VARS } from "../../constants";

import { ReactComponent as ChevronLeft } from "../../assets/icons/chevron-left.svg";
import { ReactComponent as ChevronRight } from "../../assets/icons/chevron-right.svg";

const WeatherContainerContainer = styled.div`
  background-color: ${DESIGN_VARS.color.white};
  box-shadow: 0px 4px 4px rgba(4, 5, 73, 0.25),
    14px 14px 20px rgba(5, 6, 114, 0.2);
  border-radius: 8px;
  max-height: 524px;

  @media (max-width: ${DESIGN_VARS.deviceFormats.smallTablet}) {
    max-height: unset;
  }
`;

const WeatherContainerContent = styled.div`
  padding: 50px 58px 90px 58px;
  min-width: 660px;

  @media (max-width: ${DESIGN_VARS.deviceFormats.smallTablet}) {
    padding: 32px 24px 63px;
    min-width: 552px;
  }

  @media (max-width: ${DESIGN_VARS.deviceFormats.mobile}) {
    padding: 32px 24px 63px;
    min-width: 510px;
  }

  @media (max-width: 536px) {
    padding: 32px 24px 63px;
    min-width: 300px;
  }
`;

const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${DESIGN_VARS.deviceFormats.smallTablet}) {
    flex-direction: column;
    align-items: center;

    > div {
      margin-bottom: 24px;
    }
  }
`;

const WeatherPlaceholderContainer = styled.div`
  padding: 64px 192px 24px;

  @media (max-width: ${DESIGN_VARS.deviceFormats.tablet}) {
    padding: 25px 0px 24px;
    margin: 0 auto;
    width: min-content;
  }
`;

const CardTitleContainer = styled.div`
  margin-bottom: 32px;

  @media (max-width: ${DESIGN_VARS.deviceFormats.smallTablet}) {
    text-align: center;
  }

  @media (max-width: ${DESIGN_VARS.deviceFormats.mobile}) {
    width: min-content;
    margin: 0 auto 32px;

    > h2 {
      white-space: pre;
    }
  }
`;

const CardPromptContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  white-space: pre;
`;

const WeatherCardsContainer = styled.div`
  margin-top: 54px;
  display: flex;
  position: relative;

  @media (max-width: ${DESIGN_VARS.deviceFormats.smallTablet}) {
    max-width: 420px;
    overflow-x: auto;
    margin: 0 auto;
  }

  @media (max-width: ${DESIGN_VARS.deviceFormats.mobile}) {
    max-width: 360px;
  }

  @media (max-width: 536px) {
    max-width: 260px;
  }

  @media (max-width: ${DESIGN_VARS.deviceFormats.smallMobile}) {
    max-width: 240px;
  }
`;

const StyledChevronLeft = styled(ChevronLeft)`
  position: absolute;
  top: 50%;
  transform: translate(-100%, -50%);
  left: -10px;
`;

const StyledChevronRight = styled(ChevronRight)`
  position: absolute;
  top: 50%;
  transform: translate(100%, -50%);
  right: -10px;
`;

export {
  WeatherContainerContainer,
  WeatherContainerContent,
  ControlsContainer,
  WeatherPlaceholderContainer,
  CardTitleContainer,
  CardPromptContainer,
  WeatherCardsContainer,
  StyledChevronRight,
  StyledChevronLeft,
};
