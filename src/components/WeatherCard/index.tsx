import React from "react";

import {
  WeatherCardContainer,
  WeatherCardContent,
  WeatherCardDate,
  WeatherCardImg,
  WeatherCardTemp,
} from "./styled";

type Props = {
  date: string;
  temp: string;
  imgUrl: string;
};

const WeatherCard: React.FC<Props> = ({ date, imgUrl, temp }) => {
  return (
    <WeatherCardContainer>
      <WeatherCardContent>
        <WeatherCardDate>{date}</WeatherCardDate>
        <WeatherCardImg imgUrl={imgUrl} />
        <WeatherCardTemp>{temp}</WeatherCardTemp>
      </WeatherCardContent>
    </WeatherCardContainer>
  );
};

export { WeatherCard };
