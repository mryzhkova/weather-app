import { minReqTime } from '@/constants';
import { ILocation } from '@/interfaces';
import { TPayloadAction } from '@/types';


export const checkTimer = (reqTime: number) => new Date().getTime() - reqTime > minReqTime;

export const getLocation = async () => {
  const pos: any = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
  return { lat: pos.coords.latitude, lon: pos.coords.longitude };
};

export const isLocation = (loc: TPayloadAction): loc is ILocation => typeof loc !== 'string';
