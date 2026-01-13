/**
 * 검색된 좌표가 있으면 반환하고, 없으면 GPS로 현재 위치를 찾는 유틸 함수
 */

import { convertToGrid } from '@/shared/utils/coordinateConverter';
import { getLocation } from '@/shared/utils/getLocation';

export const getTargetCoords = async (coords?: { nx: number; ny: number }) => {
  if (coords) return coords; // 검색 좌표 있는 경우

  const pos = await getLocation(); // GPS 사용
  const results = convertToGrid(pos.coords.latitude, pos.coords.longitude);
  return results;
};
