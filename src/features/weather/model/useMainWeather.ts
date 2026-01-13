import { useState } from 'react';
import { getGridCoords } from '@/features/search/model/getGridCoords';
import { useWeather } from '@/entities/weather/queries/useWeather';
import type { LocationType } from '@/features/search/model/locationData';

export const useMainWeather = () => {
  const [locationName, setLocationName] = useState('내 주변 날씨');
  const [selectedCoords, setSelectedCoords] = useState<{ nx: number; ny: number } | undefined>(undefined);
  const [hasNoLocationData, setHasNoLocationData] = useState(false);

  const { data, isPending, isError } = useWeather(selectedCoords);

  const handleLocationSelect = (location: LocationType) => {
    setLocationName(location.fullAddress);

    const coords = getGridCoords(location);

    if (coords) {
      setSelectedCoords(coords);
      setHasNoLocationData(false);
    } else {
      setSelectedCoords(undefined);
      setHasNoLocationData(true);
    }
  };

  const handleReset = () => {
    setLocationName('내 주변 날씨');
    setSelectedCoords(undefined);
    setHasNoLocationData(false);
  };

  return { data, isPending, isError, locationName, hasNoLocationData, handleReset, handleLocationSelect };
};
