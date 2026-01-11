/**
 * 기상청 API 호출을 위한 전체 URL을 생성하는 유틸 함수
 */

import { WEATHER_API_BASE_URL, WEATHER_SERVICE_KEY, WEATHER_API_CONFIG } from '../constants';

export const createWeatherUrl = (baseDate: string, baseTime: string, nx: number, ny: number) => {
  const url = new URL(WEATHER_API_BASE_URL);

  const params: Record<string, string> = {
    serviceKey: WEATHER_SERVICE_KEY || '',
    pageNo: String(WEATHER_API_CONFIG.PAGE_NO),
    numOfRows: String(WEATHER_API_CONFIG.NUM_OF_ROWS),
    dataType: WEATHER_API_CONFIG.DATA_TYPE,
    base_date: baseDate,
    base_time: baseTime,
    nx: String(nx),
    ny: String(ny),
  };

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  return url.toString();
};
