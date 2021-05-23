import React from "react";

import { AppBackground } from "../layouts/AppBackground";
import { AppTitleMainContainer, WeatherCardsContainer } from "./styled";
import { AppTitle } from "../layouts/AppTitle";
import { WeatherCard } from "../container/WeatherCard";

const App: React.FC = () => {
  return (
    <AppBackground>
      <AppTitleMainContainer>
        <AppTitle />
      </AppTitleMainContainer>
      <WeatherCardsContainer>
        <WeatherCard isSevenDaysCard />
        <WeatherCard />
      </WeatherCardsContainer>
    </AppBackground>
  );
};

export { App };
