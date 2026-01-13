export const WEATHER_KEYS = {
  all: ['weatherData'] as const,
  weather: (coords?: { nx: number; ny: number }) => {
    if (!coords) return [...WEATHER_KEYS.all, 'current-gps'] as const;
    return [...WEATHER_KEYS.all, 'coords', coords.nx, coords.ny] as const;
  },
};
