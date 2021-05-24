import React, { useEffect, useState } from "react";

import {
  PastWeatherContract,
  SevenDaysWeatherContract,
  WeatherApiService,
} from "../../services";

import { DESIGN_VARS, MERCURY_CITIES_RECORDS } from "../../constants";

import {
  WeatherContainerContainer,
  WeatherContainerContent,
  ControlsContainer,
  WeatherPlaceholderContainer,
  CardTitleContainer,
  CardPromptContainer,
  WeatherCardsContainer,
  StyledChevronLeft,
  StyledChevronRight,
} from "./styled";
import { H2 } from "../../elements/H2";
import { Select } from "../../components/Select";
import { Datepicker } from "../../components/Datepicker";
import { Meta } from "../../elements/Meta";
import { WeatherPlaceholder } from "../../elements/WeatherPlaceholder";
import { WeatherCard } from "../../components/WeatherCard";
import { dateUtils } from "../../utils/dateUtils";

type Props = {
  isSevenDaysCard?: boolean;
};

type Forecast = {
  date: string;
  temp: string;
  icon: string;
};

const WeatherContainer: React.FC<Props> = ({ isSevenDaysCard }) => {
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [weatherForecast, setWeatherForecast] = useState<Forecast[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const isMobileSlider = window.matchMedia(
    `(max-width: ${DESIGN_VARS.deviceFormats.smallTablet})`
  ).matches;

  const sliderEnd = weatherForecast.length - 3;
  const sliderStart = 0;

  const onClickLeftChevron = () => {
    if (currentSlide > sliderStart) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const onClickRightChevron = () => {
    if (currentSlide < sliderEnd) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const SELECT_CITY_VALUES = Object.values(MERCURY_CITIES_RECORDS).map(
    ({ title }) => ({ title, value: title })
  );

  const cardTitle = isSevenDaysCard
    ? "7 Days Forecast"
    : isMobileSlider
    ? "Forecast for a \n Date in the Past"
    : "Forecast for a Date in the Past";

  const cardMeta = isMobileSlider
    ? "Fill in all the fields and the \n weather will be displayed"
    : "Fill in all the fields and the weather will be displayed";

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
      time: +`${new Date(date).getTime() + 1000 * 3600 * 12}`.substr(0, 10),
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

      const mapper = (day: any) => {
        const roundedTemp = Math.round(
          isSevenDaysCard ? day.temp.day : day.temp
        );

        return {
          date: dateUtils.getDateForUI(day.dt),
          temp: roundedTemp > 0 ? `+${roundedTemp}°` : `-${roundedTemp}°`,
          icon: WeatherApiService.getWeatherIcon(day.weather[0].icon),
        };
      };

      const preparedWeather = isSevenDaysCard
        ? rawWeather.daily.splice(0, 7).map(mapper)
        : [mapper(rawWeather.current)];

      setWeatherForecast(preparedWeather);
    })();
  }, [city, date]);

  const onChangeCity = (city: string) => {
    setCity(city);
  };

  const onChangeDate = (date: string) => {
    setDate(date);
  };

  const visibleWeatherForecast = isSevenDaysCard
    ? isMobileSlider
      ? weatherForecast
      : weatherForecast.slice(currentSlide, currentSlide + 3)
    : weatherForecast;

  console.log(weatherForecast, visibleWeatherForecast);

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
        {weatherForecast.length ? (
          <WeatherCardsContainer>
            {isSevenDaysCard && !isMobileSlider && (
              <>
                <StyledChevronLeft onClick={onClickLeftChevron} />
                <StyledChevronRight onClick={onClickRightChevron} />
              </>
            )}
            {visibleWeatherForecast.map(({ date, icon, temp }) => {
              return (
                <WeatherCard
                  date={date}
                  temp={temp}
                  imgUrl={icon}
                  isWide={!isSevenDaysCard}
                />
              );
            })}
          </WeatherCardsContainer>
        ) : (
          <>
            <WeatherPlaceholderContainer>
              <WeatherPlaceholder />
            </WeatherPlaceholderContainer>
            <CardPromptContainer>
              <Meta bold>{cardMeta}</Meta>
            </CardPromptContainer>
          </>
        )}
      </WeatherContainerContent>
    </WeatherContainerContainer>
  );
};

export { WeatherContainer };
