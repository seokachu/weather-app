import { WEATHER_CATEGORY } from '../constants';
import type { WeatherItem } from '../types';

// 시간대 별 기온 리스트
export const getHourlyTemps = (items: WeatherItem[]) => {
  const hourlyTemps = items.filter((item) => item.category === WEATHER_CATEGORY.TEMPERATURE);
  return hourlyTemps;
};

// 현재 기온 가져오기
export const getCurrentTemp = (items: WeatherItem[]) => {
  const currentHour = String(new Date().getHours()).padStart(2, '0') + '00';

  const exactItem = items.find(
    (item) => item.category === WEATHER_CATEGORY.TEMPERATURE && item.fcstTime === currentHour
  );
  const fallbackItem = items.find((item) => item.category === WEATHER_CATEGORY.TEMPERATURE);

  const currentTemp = exactItem?.fcstValue || fallbackItem?.fcstValue;

  return currentTemp;
};

// 최저, 최고 기온
export const getMinMaxTemp = (items: WeatherItem[]) => {
  const hourlyTemps = getHourlyTemps(items);
  const tempValues = hourlyTemps.map((item) => Number(item.fcstValue));

  // 최저기온, 최고기온 값 가져오기
  const apiMin = items.find((item) => item.category === WEATHER_CATEGORY.MIN_TEMP)?.fcstValue;
  const apiMax = items.find((item) => item.category === WEATHER_CATEGORY.MAX_TEMP)?.fcstValue;

  // fallback
  const minTemp = apiMin ? roundTemp(apiMin) : calculateMinMax(tempValues, 'min');
  const maxTemp = apiMax ? roundTemp(apiMax) : calculateMinMax(tempValues, 'max');

  return { minTemp, maxTemp };
};

// 기온 반올림 유틸
const roundTemp = (value: string | undefined) => {
  if (!value) return '-';
  return Math.round(Number(value));
};

// 범위 내 최솟값/최댓값 계산 유틸
const calculateMinMax = (values: number[], type: 'min' | 'max') => {
  if (values.length === 0) return '-';

  const result = type === 'min' ? Math.min(...values) : Math.max(...values);
  return Math.round(result);
};

// 시간 별 기온 정보 가져오기 (15시간)
export const getHourlyForecast = (data: WeatherItem[]) => {
  const hourlyForecast = data.filter((item) => item.category === WEATHER_CATEGORY.TEMPERATURE).slice(0, 15);
  return hourlyForecast;
};
