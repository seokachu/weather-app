import { useQuery } from '@tanstack/react-query';
import { HOUR, MINUTE } from '@/shared/constants/time';
import { WEATHER_KEYS } from './keys';
import { getVilageFcst } from '../api';

export const useWeather = () => {
  return useQuery({
    queryKey: WEATHER_KEYS.all,
    queryFn: getVilageFcst,
    staleTime: MINUTE * 30,
    gcTime: HOUR * 1,
    retry: 1,
  });
};
