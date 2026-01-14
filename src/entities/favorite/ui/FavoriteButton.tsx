import { Star } from 'lucide-react';
import toast from 'react-hot-toast';
import { useFavorites } from '../hooks/useFavorites';
import { TOAST_MESSAGES } from '@/shared/constants/messages';

interface FavoriteButtonProps {
  coords: { nx: number; ny: number };
  locationName: string;
}

const FavoriteButton = ({ coords, locationName }: FavoriteButtonProps) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();

  const favorited = isFavorite(locationName);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (favorited) {
      removeFavorite(locationName);
      toast.success(TOAST_MESSAGES.FAVORITE.REMOVE);
    } else {
      addFavorite({
        id: locationName,
        fullAddress: locationName,
        nx: coords.nx,
        ny: coords.ny,
      });

      toast.success(TOAST_MESSAGES.FAVORITE.ADD(locationName));
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="absolute top-4 right-4 p-2 transition-all active:scale-125 cursor-pointer z-10"
      aria-label="즐겨찾기 토글"
    >
      {favorited ? (
        <Star size={28} className="text-yellow-400 fill-yellow-400 drop-shadow-sm" />
      ) : (
        <Star size={28} className="text-white opacity-80 hover:opacity-100 transition-opacity" />
      )}
    </button>
  );
};

export default FavoriteButton;
