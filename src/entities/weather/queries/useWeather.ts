import { useQuery } from '@tanstack/react-query';
import { HOUR, MINUTE } from '@/shared/constants/time';
import { WEATHER_KEYS } from './keys';
import { getVilageFcst } from '../api';

export const useWeather = (coords?: { nx: number; ny: number }) => {
  return useQuery({
    queryKey: WEATHER_KEYS.weather(coords),
    queryFn: () => getVilageFcst(coords),

    staleTime: MINUTE * 30,
    gcTime: HOUR * 1,
    retry: 1,
  });
};
