import styled from "styled-components";
import { DESIGN_VARS } from "../../constants";

const AppTitleContainer = styled.h1`
  display: grid;
  grid-template-areas:
    "weathertitle epmty"
    "empty forecasttitle";
  font-size: 102px;
  color: ${DESIGN_VARS.color.white};
  font-family: UbuntuBold;

  @media (max-width: ${DESIGN_VARS.deviceFormats.tablet}) {
    font-size: 80px;
  }

  @media (max-width: ${DESIGN_VARS.deviceFormats.smallTablet}) {
    font-size: 60px;
  }

  @media (max-width: ${DESIGN_VARS.deviceFormats.mobile}) {
    font-size: 54px;
  }

  @media (max-width: ${DESIGN_VARS.deviceFormats.smallMobile}) {
    font-size: 32px;
  }
`;

const AppPartTitleWeather = styled.div`
  grid-area: weathertitle;
`;

const AppPartTitleForecast = styled.div`
  grid-area: forecasttitle;
  position: relative;
  left: -46px;
`;

const AppPartTitleEmpty = styled.div`
  grid-area: epmty;
`;

export {
  AppPartTitleForecast,
  AppPartTitleWeather,
  AppTitleContainer,
  AppPartTitleEmpty,
};
