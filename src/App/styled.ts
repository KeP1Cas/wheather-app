import styled from "styled-components";
import { DESIGN_VARS } from "../constants";

const AppTitleMainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 30px;
`;

const WeatherContainersContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 60px;

  > div:first-child {
    margin-right: 34px;

    @media (max-width: ${DESIGN_VARS.deviceFormats.tabled}) {
      margin-right: 0;
      margin-bottom: 34px;
    }
  }

  @media (max-width: ${DESIGN_VARS.deviceFormats.tabled}) {
    flex-direction: column;
    align-items: center;
  }
`;

const ILoveMercuryContainer = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
`;

export {
  AppTitleMainContainer,
  WeatherContainersContainer,
  ILoveMercuryContainer,
};
