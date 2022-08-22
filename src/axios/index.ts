import axios from 'axios';


export const dailyWeatherApi = axios.create({
  baseURL: process.env.REACT_APP_WEATHER_API_URL,
});

export const hourlyWeatherApi = axios.create({
  baseURL: process.env.REACT_APP_HOURLY_WEATHER_API_URL,
});

dailyWeatherApi.interceptors.request.use(config => ({
  ...config,
  url: `${config.url}&key=${process.env.REACT_APP_WEATHER_API_KEY}`,
}));

hourlyWeatherApi.interceptors.request.use(config => ({
  ...config,
  url: `${config.url}&key=${process.env.REACT_APP_HOURLY_WEATHER_API_KEY}&contentType=json`,
}));

