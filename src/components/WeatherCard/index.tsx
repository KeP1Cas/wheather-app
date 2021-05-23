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
  isWide?: boolean;
};

const WeatherCard: React.FC<Props> = ({ date, imgUrl, temp, isWide }) => {
  return (
    <WeatherCardContainer isWide={isWide}>
      <WeatherCardContent>
        <WeatherCardDate>{date}</WeatherCardDate>
        <WeatherCardImg src={imgUrl} />
        <WeatherCardTemp>{temp}</WeatherCardTemp>
      </WeatherCardContent>
    </WeatherCardContainer>
  );
};

export { WeatherCard };
