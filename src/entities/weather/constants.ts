export const WEATHER_SERVICE_KEY = import.meta.env.VITE_WEATHER_SERVICE_KEY;
export const WEATHER_API_BASE_URL = import.meta.env.VITE_WEATHER_API_BASE_URL;

/**
 * 기상청 단기예보 발표 기준 시간
 * MORNING: 오전 5시 발표 (당일 데이터)
 * NIGHT: 전날 오후 11시 발표 (새벽 시간대 조회용)
 */
export const WEATHER_BASE_TIME = {
  MORNING: '0500',
  NIGHT: '2300',
} as const;

/**
 * API 호출 시 필요한 기본 설정값
 */
export const WEATHER_API_CONFIG = {
  PAGE_NO: 1,
  NUM_OF_ROWS: 1000,
  DATA_TYPE: 'JSON',
} as const;

/**
 * 기상청 카테고리
 */
export const WEATHER_CATEGORY = {
  TEMPERATURE: 'TMP',
  MIN_TEMP: 'TMN',
  MAX_TEMP: 'TMX',
  SKY: 'SKY',
  PRECIPITATION: 'PTY',
} as const;
