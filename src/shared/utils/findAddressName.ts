/**
 * 기상청 격자 좌표(nx, ny)를 받아
 * 주소 목록에서 일치하는 주소명을 찾아 반환
 */

import { flattenedLocations } from '@/shared/utils/locationData';
import { getLocationCoordinate } from '@/shared/data/locationCoordinates';
import { convertToGrid } from '@/shared/utils/coordinateConverter';

const DEFAULT_LOCATION_NAME = '내 주변 지역';

export const findAddressName = (coords?: { nx: number; ny: number }): string => {
  if (!coords) return '';

  const matched = flattenedLocations.find((loc) => {
    const coord = getLocationCoordinate({
      level1: loc.level1,
      level2: loc.level2,
      level3: loc.level3,
    });
    if (!coord) return false;

    const grid = convertToGrid(coord.lat, coord.lon);
    return grid.nx === coords.nx && grid.ny === coords.ny;
  });

  const addressName = matched ? matched.fullAddress : DEFAULT_LOCATION_NAME;

  return addressName;
};
