import { getWeatherBaseTime } from './utils/getWeatherBaseTime';
import { createWeatherUrl } from './utils/createWeatherUrl';
import { getTargetCoords } from './utils/getSearchCoords';
import type { WeatherData } from './types';

export const getVilageFcst = async (coords?: { nx: number; ny: number }): Promise<WeatherData> => {
  const targetCoords = await getTargetCoords(coords);
  const { nx, ny } = targetCoords;

  // 기상청 기준 발표 시간
  const { baseDate, baseTime } = getWeatherBaseTime();

  // 기상청 날짜&시간 포맷 생성
  const url = createWeatherUrl(baseDate, baseTime, nx, ny);

  const res = await fetch(url);
  const { response } = await res.json();

  if (!response?.body?.items) {
    throw new Error(response?.header?.resultMsg || '날씨 정보를 불러오지 못했습니다.');
  }

  const weatherData = {
    items: response.body.items.item,
    coords: targetCoords,
  };

  return weatherData;
};
