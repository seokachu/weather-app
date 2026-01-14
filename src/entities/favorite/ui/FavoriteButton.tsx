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
    } else {
      addFavorite({
        id: locationName,
        fullAddress: locationName,
        nx: coords.nx,
        ny: coords.ny,
      });
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="absolute top-4 right-4 p-2 text-2xl transition-transform active:scale-125 cursor-pointer z-10"
      aria-label="즐겨찾기 토글"
    >
      {favorited ? '⭐️' : '☆'}
    </button>
  );
};

export default FavoriteButton;
