import { WEATHER_API_KEY } from "../constants";

export type SevenDaysWeatherContract = {
  lat: string;
  lon: string;
};

export type PastWeatherContract = {
  lat: string;
  lon: string;
  time: number;
};

class WeatherApiService {
  private static baseUrl = "https://api.openweathermap.org/data/2.5/onecall";

  /**
   * Поскольку у нас нет других сервисов - я не стал выносить http-реквест в отедельный сервис, а реализовал его в сервисе погоды
   * @param url
   */
  private static get = (url: string): Promise<any> => {
    return fetch(url);
  };

  static fetchSevenDaysWeather = async ({
    lat,
    lon,
  }: SevenDaysWeatherContract) => {
    const { data } = await WeatherApiService.get(
      `${WeatherApiService.baseUrl}?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );

    return data;
  };

  static fetchPastWeather = async ({ lat, lon, time }: PastWeatherContract) => {
    const { data } = await WeatherApiService.get(
      `${WeatherApiService.baseUrl}/timemachine?lat=${lat}&lon=${lon}&dt=${time}&appid=${WEATHER_API_KEY}`
    );

    return data;
  };
}

export { WeatherApiService };
