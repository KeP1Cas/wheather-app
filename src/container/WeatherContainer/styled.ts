import styled from "styled-components";
import { DESIGN_VARS } from "../../constants";

const WeatherContainerContainer = styled.div`
  background-color: ${DESIGN_VARS.color.white};
  box-shadow: 0px 4px 4px rgba(4, 5, 73, 0.25),
    14px 14px 20px rgba(5, 6, 114, 0.2);
  border-radius: 8px;
`;

const WeatherContainerContent = styled.div`
  padding: 50px 58px 90px 58px;
`;

const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WeatherPlaceholderContainer = styled.div`
  padding: 64px 192px 24px;
`;

const CardTitleContainer = styled.div`
  margin-bottom: 32px;
`;

const CardPromptContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export {
  WeatherContainerContainer,
  WeatherContainerContent,
  ControlsContainer,
  WeatherPlaceholderContainer,
  CardTitleContainer,
  CardPromptContainer,
};
