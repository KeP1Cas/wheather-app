import styled from "styled-components";
import { DESIGN_VARS } from "../../constants";

const WeatherCardContainer = styled.div`
  background-color: ${DESIGN_VARS.color.blue};
`;

const WeatherCardContent = styled.div`
  padding: 20px;
`;

const WeatherCardDate = styled.div``;

const WeatherCardImg = styled.div<{ imgUrl: string }>`
  background-image: ${({ imgUrl }) => `url("${imgUrl}")`};
`;

const WeatherCardTemp = styled.div``;

export {
  WeatherCardContainer,
  WeatherCardContent,
  WeatherCardDate,
  WeatherCardImg,
  WeatherCardTemp,
};
