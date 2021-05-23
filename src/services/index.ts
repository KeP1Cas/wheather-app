import axios from "axios";
import { WEATHER_API_KEY } from "../constants";

type SevenDaysWeatherContract = {
  lat: string;
  lon: string;
};

type PastWeatherContract = {
  lat: string;
  lon: string;
  time: number;
};

class WeatherApiService {
  static baseUrl = "https://api.openweathermap.org/data/2.5/onecall";

  static fetchSevenDaysWeather = async ({
    lat,
    lon,
  }: SevenDaysWeatherContract) => {
    return await axios.get(
      `${WeatherApiService.baseUrl}?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );
  };

  static fetchPastWeather = async ({ lat, lon, time }: PastWeatherContract) => {
    return await axios.get(
      `${WeatherApiService.baseUrl}/timemachine?lat=${lat}&lon=${lon}&dt=${time}&appid=${WEATHER_API_KEY}`
    );
  };
}

export { WeatherApiService };
