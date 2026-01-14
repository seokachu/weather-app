import { useNavigate } from 'react-router-dom';
import RegionSearch from '@/features/search/ui/RegionSearch';
import { LocationErrorBanner } from '@/shared/ui/LocationErrorBanner';
import type { LocationType } from '@/shared/utils/locationData';

interface MainHeaderProps {
  isDetail: boolean;
  locationError: string | null;
  onLocationSelect: (location: LocationType) => void;
}

export const MainHeader = ({ isDetail, locationError, onLocationSelect }: MainHeaderProps) => {
  const navigate = useNavigate();

  if (isDetail) {
    return (
      <div className="flex items-center mb-6">
        <button onClick={() => navigate(-1)} className="mr-3 p-2 flex items-center gap-1">
          <span className="text-xl">⬅️</span>
          <span className="text-slate-600">뒤로가기</span>
        </button>
      </div>
    );
  }

  return (
    <>
      {locationError && <LocationErrorBanner message={locationError} />}
      <RegionSearch onSelect={onLocationSelect} />
    </>
  );
};
