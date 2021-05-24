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

    @media (max-width: ${DESIGN_VARS.deviceFormats.laptop}) {
      margin-right: 0;
      margin-bottom: 34px;
    }
  }

  @media (max-width: ${DESIGN_VARS.deviceFormats.laptop}) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: ${DESIGN_VARS.deviceFormats.smallMobile}) {
    margin-top: 24px;
  }
`;

const ILoveMercuryContainer = styled.div`
  flex: 0 0 auto;
  margin: 0 auto;
  text-align: center;
  margin: 199px 0 16px;
  @media (max-width: ${DESIGN_VARS.deviceFormats.laptop}) {
    margin: 140px 0 16px;
  }
  @media (max-width: ${DESIGN_VARS.deviceFormats.mobile}) {
    margin: 100px 0 16px;
    font-size: 20px;
  }
`;

export {
  AppTitleMainContainer,
  WeatherContainersContainer,
  ILoveMercuryContainer,
};
