/**
 * 사용자가 선택한 지역(LocationType) 정보를 바탕으로
 * 기상청 API용 격자 좌표(nx, ny)를 계산하여 반환합니다.
 */

import { getLocationCoordinate } from '@/shared/data/locationCoordinates';
import { convertToGrid } from '@/shared/utils/coordinateConverter';
import type { LocationType } from '@/shared/utils/locationData';

export const getGridCoords = (location: LocationType) => {
  // 위경도 좌표 찾기
  const coordinate = getLocationCoordinate({
    level1: location.level1,
    level2: location.level2,
    level3: location.level3,
  });

  if (!coordinate) return null;

  // 위경도를 기상청 nx, ny 격자로 변환
  const grid = convertToGrid(coordinate.lat, coordinate.lon);

  return {
    nx: grid.nx,
    ny: grid.ny,
  };
};
