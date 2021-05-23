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
  private static baseIconUrl = "http://openweathermap.org/img/wn/";

  /**
   * Поскольку у нас нет других сервисов - я не стал выносить http-реквест в отедельный сервис, а реализовал его в сервисе погоды
   * @param url
   */
  private static get = async (url: string): Promise<any> => {
    const data = await fetch(url);
    return await data.json();
  };

  static getWeatherIcon = (icon: string) => {
    return `${WeatherApiService.baseIconUrl}${icon}@2x.png`;
  };

  static fetchSevenDaysWeather = async ({
    lat,
    lon,
  }: SevenDaysWeatherContract) => {
    return await WeatherApiService.get(
      `${WeatherApiService.baseUrl}?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
  };

  static fetchPastWeather = async ({ lat, lon, time }: PastWeatherContract) => {
    return await WeatherApiService.get(
      `${WeatherApiService.baseUrl}/timemachine?lat=${lat}&lon=${lon}&dt=${time}&appid=${WEATHER_API_KEY}&units=metric`
    );
  };
}

export { WeatherApiService };
