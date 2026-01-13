import type { WEATHER_BASE_TIME } from './constants';

export interface WeatherItem {
  category: string;
  fcstDate: string;
  fcstTime: string;
  fcstValue: string;
  nx: number;
  ny: number;
}

export interface WeatherData {
  items: WeatherItem[];
  coords: { nx: number; ny: number };
}

export type WeatherBaseTime = (typeof WEATHER_BASE_TIME)[keyof typeof WEATHER_BASE_TIME];
