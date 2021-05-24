import React from "react";

import { AppBackground } from "../layouts/AppBackground";
import {
  AppTitleMainContainer,
  WeatherContainersContainer,
  ILoveMercuryContainer,
} from "./styled";
import { AppTitle } from "../layouts/AppTitle";
import { WeatherContainer } from "../container/WeatherContainer";
import { Meta } from "../elements/Meta";

const App: React.FC = () => {
  return (
    <AppBackground>
      <AppTitleMainContainer>
        <AppTitle />
      </AppTitleMainContainer>
      <WeatherContainersContainer>
        <WeatherContainer isSevenDaysCard />
        <WeatherContainer />
      </WeatherContainersContainer>
      <ILoveMercuryContainer>
        <Meta uppercase>C ЛЮБОВЬЮ ОТ MERCURY DEVELOPMENT</Meta>
      </ILoveMercuryContainer>
    </AppBackground>
  );
};

export { App };
