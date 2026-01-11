import { convertToGrid } from '@/shared/utils/coordinateConverter';
import { getLocation } from '@/shared/utils/getLocation';
import { getWeatherBaseTime } from './utils/getWeatherBaseTime';
import { createWeatherUrl } from './utils/createWeatherUrl';
import type { WeatherItem } from './types';

export const getVilageFcst = async (): Promise<WeatherItem[]> => {
  // 위치 정보 불러오기 및 격자 좌표 변환
  const pos = await getLocation();
  const { latitude, longitude } = pos.coords;
  const { nx, ny } = convertToGrid(latitude, longitude);

  // 기상청 기준 발표 시간
  const { baseDate, baseTime } = getWeatherBaseTime();

  // 기상청 날짜&시간 포맷 생성
  const url = createWeatherUrl(baseDate, baseTime, nx, ny);

  const res = await fetch(url);
  const { response } = await res.json();

  if (!response?.body?.items) {
    throw new Error(response?.header?.resultMsg || '날씨 정보를 불러오지 못했습니다.');
  }

  return response.body.items.item;
};
