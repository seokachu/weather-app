/**
 * 기상청 단기예보 기준에 맞는 base_date와 base_time을 반환하는 유틸 함수
 */

import { formatDate } from '@/shared/utils/formatDate';
import { WEATHER_BASE_TIME } from '../constants';
import type { WeatherBaseTime } from '../types';

export const getWeatherBaseTime = () => {
  const now = new Date();

  let baseDate = formatDate(now);
  let baseTime: WeatherBaseTime = WEATHER_BASE_TIME.MORNING;

  // 새벽 5시 이전이면 전날 밤 23시 데이터를 가져와야 함 (기상청 규칙)
  if (now.getHours() < 5) {
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);

    baseDate = formatDate(yesterday);
    baseTime = WEATHER_BASE_TIME.NIGHT;
  }

  return { baseDate, baseTime };
};
