import styled from "styled-components";

const AppTitleMainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 65px;
`;

const WeatherCardsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 60px;

  div:first-child {
    margin-right: 34px;
  }
`;

export { AppTitleMainContainer, WeatherCardsContainer };
