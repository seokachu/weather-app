import { useState, useEffect } from 'react';
import { getLocation } from '@/shared/utils/getLocation';

export const useLocationPermission = (isDetail: boolean) => {
  const [locationError, setLocationError] = useState<string | null>(null);

  useEffect(() => {
    if (isDetail) return;

    const initLocation = async () => {
      try {
        await getLocation();
        setLocationError(null);
      } catch (error: unknown) {
        if (error instanceof GeolocationPositionError && error.code === error.PERMISSION_DENIED) {
          setLocationError('위치 권한이 거부되었습니다. 직접 지역을 검색해주세요');
        } else {
          setLocationError('현재 위치 정보를 불러올 수 없습니다.');
        }
      }
    };
    initLocation();
  }, [isDetail]);

  return locationError;
};
