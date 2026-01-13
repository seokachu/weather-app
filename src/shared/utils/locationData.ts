import koreaDistricts from '@/shared/data/korea_districts.json';

export interface LocationType {
  level1: string;
  level2: string;
  level3: string;
  fullAddress: string;
  displayName: string;
}

export const flattenedLocations: LocationType[] = (koreaDistricts as string[]).map((item) => {
  const parts = item.split('-');

  const level1 = parts[0] || '';
  const level2 = parts[1] || '';
  const level3 = parts[2] || '';
  const fullAddress = parts.join(' ');
  const displayName = level3 || level2 || level1;

  const locationObject = {
    level1,
    level2,
    level3,
    fullAddress,
    displayName,
  };

  return locationObject;
});
