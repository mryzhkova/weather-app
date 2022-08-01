import * as icons from '@/assets/icons';
import * as imgs from '@/assets/images';
import { Desriptions } from '@/constants';
import { ILocation, TPayloadAction, IWeatherResponse, IWeather, IEvent } from '@/types';


export const checkTimer = (reqTime: number) => new Date().getTime() - reqTime > 3600000;

export const getLocation = async () => {
  const pos: any = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
  return { lat: pos.coords.latitude, lon: pos.coords.longitude };
};

export const isLocation = (loc: TPayloadAction): loc is ILocation => typeof loc !== 'string';

export const getFields = (arr: IWeatherResponse[]): IWeather[] => arr.map(
  ({ max_temp, datetime, weather }) => ({
    temp: max_temp,
    datetime,
    description: weather.description
  })
);

export const getEventFields = (arr: any[]): IEvent[] => arr.map(
  ({ start, summary, id }) => ({
    id,
    summary,
    time: start.dateTime.slice(11, 16)
  })
);

export const getDay = (datetime: string) => new Date(datetime).toString().slice(0, 3);

export const getImages = (description: string) => {
  const desc = description.toLocaleLowerCase();
  if (desc.includes(Desriptions.clear)) {
    return { icon: icons.sunIcon, image: imgs.sunImage };
  }
  if (desc.includes(Desriptions.stormy)) {
    return { icon: icons.stormyIcon, image: imgs.stormyImage };
  }
  if (desc.includes(Desriptions.storm)) {
    return { icon: icons.stormIcon, image: imgs.stormImage };
  }
  if (desc.includes(Desriptions.rainy)) {
    return { icon: icons.rainyIcon, image: imgs.rainyImage };
  }
  if (desc.includes(Desriptions.rain)) {
    return { icon: icons.rainIcon, image: imgs.rainImage };
  }
  if (desc.includes(Desriptions.snowy)) {
    return { icon: icons.snowyIcon, image: imgs.snowyImage };
  }
  if (desc.includes(Desriptions.snow)) {
    return { icon: icons.snowIcon, image: imgs.snowImage };
  }
  if (
    desc.includes(Desriptions.fog)
    || desc.includes(Desriptions.heze)
    || desc.includes(Desriptions.mist)
  ) {
    return { icon: icons.fogIcon, image: imgs.fogImage };
  }
  if (desc.includes(Desriptions.cloudy) || desc.includes(Desriptions.scattered)) {
    return { icon: icons.cloudyIcon, image: imgs.cloudyImage };
  }
  return { icon: icons.cloudIcon, image: imgs.cloudImage };
};
