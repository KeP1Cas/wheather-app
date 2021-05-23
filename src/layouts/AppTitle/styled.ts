import styled from "styled-components";
import { DESIGN_VARS } from "../../constants";

const AppTitleContainer = styled.h1`
  display: grid;
  grid-template-areas:
    "weathertitle epmty"
    "empty forecasttitle";
  font-size: 102px;
  color: ${DESIGN_VARS.color.white};
  line-height: 122px;
  font-family: UbuntuBold;
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
