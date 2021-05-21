import React from "react";

import {
  AppTitleContainer,
  AppPartTitleWeather,
  AppPartTitleForecast,
  AppPartTitleEmpty,
} from "./styled";

const AppTitle = () => (
  <AppTitleContainer>
    <AppPartTitleWeather>Weather</AppPartTitleWeather>
    <AppPartTitleEmpty />
    <AppPartTitleForecast>forecast</AppPartTitleForecast>
  </AppTitleContainer>
);

export { AppTitle };
