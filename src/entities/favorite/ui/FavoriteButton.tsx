import { Star } from 'lucide-react';
import toast from 'react-hot-toast';
import { useFavorites } from '../hooks/useFavorites';

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
      toast('즐겨찾기 목록에서 제거되었습니다.', {
        icon: '🗑️',
      });
    } else {
      addFavorite({
        id: locationName,
        fullAddress: locationName,
        nx: coords.nx,
        ny: coords.ny,
      });

      toast.success(`${locationName}이(가) 추가되었습니다.`);
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
