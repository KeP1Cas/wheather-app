import styled from "styled-components";

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
