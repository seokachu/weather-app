import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFavorites } from '@/entities/favorite/hooks/useFavorites';
import type { LocationType } from '@/shared/utils/locationData';

export const useDetailWeather = (isDetail: boolean, onSelect: (location: LocationType) => void) => {
  const { id } = useParams();
  const { favorites } = useFavorites();

  useEffect(() => {
    if (isDetail && id && favorites.length > 0) {
      const decodedAddress = decodeURIComponent(id);
      const target = favorites.find((favorite) => favorite.fullAddress === decodedAddress);

      if (target) {
        const addressParts = target.fullAddress.split(' ');
        onSelect({
          level1: addressParts[0] || '',
          level2: addressParts[1] || '',
          level3: addressParts[2] || '',
          fullAddress: target.fullAddress,
          displayName: target.name,
        });
      }
    }
  }, [isDetail, id, favorites, onSelect]);
};
