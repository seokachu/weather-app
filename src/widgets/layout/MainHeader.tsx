import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
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

  return (
    <header className="w-full mb-6">
      {locationError && (
        <div className="mb-4">
          <LocationErrorBanner message={locationError} />
        </div>
      )}

      {isDetail ? (
        <div className="flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center gap-1 -ml-2 p-2 text-slate-600 hover:text-cyan-600 transition-colors"
            aria-label="뒤로가기"
          >
            <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium text-lg">뒤로가기</span>
          </button>
        </div>
      ) : (
        <RegionSearch onSelect={onLocationSelect} />
      )}
    </header>
  );
};

export default MainHeader;
