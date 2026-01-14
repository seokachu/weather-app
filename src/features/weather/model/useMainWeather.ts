import { useCallback, useMemo, useState } from 'react';
import { useWeather } from '@/entities/weather/queries/useWeather';
import { getGridCoords } from '@/shared/utils/getGridCoords';
import { findAddressName } from '@/shared/utils/findAddressName';
import type { LocationType } from '@/shared/utils/locationData';

export const useMainWeather = () => {
  const [locationName, setLocationName] = useState('');
  const [selectedCoords, setSelectedCoords] = useState<{ nx: number; ny: number } | undefined>(undefined);
  const [hasNoLocationData, setHasNoLocationData] = useState(false);

  const { data, isPending, isError } = useWeather(selectedCoords);

  const displayLocationName = useMemo(() => {
    if (locationName) return locationName;
    return findAddressName(selectedCoords || data?.coords);
  }, [data?.coords, selectedCoords, locationName]);

  const handleLocationSelect = useCallback((location: LocationType) => {
    const coords = getGridCoords(location);
    setLocationName(location.fullAddress);
    if (coords) {
      setSelectedCoords(coords);
      setHasNoLocationData(false);
    } else {
      setHasNoLocationData(true);
    }
  }, []);

  const handleReset = useCallback(() => {
    setSelectedCoords(undefined);
    setLocationName('');
    setHasNoLocationData(false);
  }, []);

  return {
    selectedCoords,
    data,
    isPending,
    isError,
    locationName: displayLocationName,
    hasNoLocationData,
    handleReset,
    handleLocationSelect,
  };
};
