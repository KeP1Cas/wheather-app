import React, { useEffect, useState } from "react";

import {
  PastWeatherContract,
  SevenDaysWeatherContract,
  WeatherApiService,
} from "../../services";

import { MERCURY_CITIES_RECORDS } from "../../constants";

import {
  WeatherContainerContainer,
  WeatherContainerContent,
  ControlsContainer,
  WeatherPlaceholderContainer,
  CardTitleContainer,
  CardPromptContainer,
} from "./styled";
import { H2 } from "../../elements/H2";
import { Select } from "../../components/Select";
import { Datepicker } from "../../components/Datepicker";
import { Meta } from "../../elements/Meta";
import { WeatherPlaceholder } from "../../elements/WeatherPlaceholder";

type Props = {
  isSevenDaysCard?: boolean;
};

const WeatherContainer: React.FC<Props> = ({ isSevenDaysCard }) => {
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [weatherForecast, setWeatherForecast] = useState<any>();

  const SELECT_CITY_VALUES = Object.values(MERCURY_CITIES_RECORDS).map(
    ({ title }) => ({ title, value: title })
  );

  const cardTitle = isSevenDaysCard
    ? "7 Days Forecast"
    : "Forecast for a Date in the Past";

  const fetchWeather = () => {
    if (isSevenDaysCard) {
      if (!city) {
        return;
      }
    } else {
      if (!city || !date) {
        return;
      }
    }

    const { lat, lon } = (MERCURY_CITIES_RECORDS as Record<string, any>)[
      city.toLowerCase()
    ].coordinates;

    const sevenDaysWeatherParams: SevenDaysWeatherContract = {
      lon,
      lat,
    };

    const pastWeatherParams: PastWeatherContract = {
      lon,
      lat,
      time: new Date(date).getTime(),
    };

    const { fetchSevenDaysWeather, fetchPastWeather } = WeatherApiService;

    return isSevenDaysCard
      ? fetchSevenDaysWeather(sevenDaysWeatherParams)
      : fetchPastWeather(pastWeatherParams);
  };

  useEffect(() => {
    (async () => {
      const rawWeather = await fetchWeather();

      if (!rawWeather) {
        return;
      }

      console.log("weather => ", rawWeather);

      const preparedWeather = rawWeather.daily.map((day: any) => {
        return {
          date: day.dt,
          temperature: Math.round(day.temp.day),
          weather: {
            title: day.weather[0].main,
            iconId: day.weather[0].icon,
          },
        };
      });

      console.log("preparedWeather => ", preparedWeather);
    })();
  }, [city, date]);

  const onChangeCity = (city: string) => {
    setCity(city);
  };

  const onChangeDate = (date: string) => {
    setDate(date);
  };

  return (
    <WeatherContainerContainer>
      <WeatherContainerContent>
        <CardTitleContainer>
          <H2>{cardTitle}</H2>
        </CardTitleContainer>
        <ControlsContainer>
          <Select
            onChange={onChangeCity}
            options={SELECT_CITY_VALUES}
            value={city}
            placeholder="Select city"
          />
          {!isSevenDaysCard && (
            <Datepicker onChange={onChangeDate} value={date} />
          )}
        </ControlsContainer>
        <WeatherPlaceholderContainer>
          <WeatherPlaceholder />
        </WeatherPlaceholderContainer>
        <CardPromptContainer>
          <Meta bold>
            Fill in all the fields and the weather will be displayed
          </Meta>
        </CardPromptContainer>
      </WeatherContainerContent>
    </WeatherContainerContainer>
  );
};

export { WeatherContainer };
