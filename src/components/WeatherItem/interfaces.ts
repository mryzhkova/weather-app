import { IWeather } from '@/interfaces';


export interface IProps {
  dayParams: IWeather;
  mode: string;
  currentItem?: boolean;
}
