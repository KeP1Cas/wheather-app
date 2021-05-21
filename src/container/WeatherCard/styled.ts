import styled from "styled-components";
import { DESIGN_VARS } from "../../constants";

const WeatherCardContainer = styled.div`
  background-color: ${DESIGN_VARS.color.white};
  box-shadow: 0px 4px 4px rgba(4, 5, 73, 0.25),
    14px 14px 20px rgba(5, 6, 114, 0.2);
  border-radius: 8px;
`;

const WeatherCardContent = styled.div`
  padding: 50px 58px 90px 58px;
`;

export { WeatherCardContainer, WeatherCardContent };
