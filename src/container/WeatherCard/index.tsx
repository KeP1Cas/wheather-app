import React from "react";

import { MERCURY_CITIES_RECORDS } from "../../constants";

import { WeatherCardContainer, WeatherCardContent } from "./styled";
import { H2 } from "../../elements/H2";
import { Select } from "../../components/Select";
import { Datepicker } from "../../components/Datepicker";
import { Meta } from "../../elements/Meta";

type Props = {
  isSevenDaysCard?: boolean;
};

const WeatherCard: React.FC<Props> = ({ isSevenDaysCard }) => {
  const SELECT_CITY_VALUES = Object.values(MERCURY_CITIES_RECORDS).map(
    ({ title }) => ({ title, value: title })
  );

  const cardTitle = isSevenDaysCard
    ? "7 Days Forecast"
    : "Forecast for a Date in the Past";

  return (
    <WeatherCardContainer>
      <WeatherCardContent>
        <H2>{cardTitle}</H2>
        <Select values={SELECT_CITY_VALUES} placeholder="Select city" />
        {!isSevenDaysCard && <Datepicker />}
        <Meta bold>
          Fill in all the fields and the weather will be displayed
        </Meta>
      </WeatherCardContent>
    </WeatherCardContainer>
  );
};

export { WeatherCard };
