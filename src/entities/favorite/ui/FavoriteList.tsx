import FavoriteListItem from './FavoriteListItem';
import type { FavoriteLocation } from '../types';

interface FavoriteListProps {
  favorites: FavoriteLocation[];
  onRemove: (id: string) => void;
  onUpdate: (id: string, newName: string) => void;
  onNavigate: (address: string) => void;
}

const FavoriteList = ({ favorites, onRemove, onUpdate, onNavigate }: FavoriteListProps) => {
  return (
    <ul className="flex flex-col gap-3">
      {favorites.map((favorite) => (
        <FavoriteListItem
          key={favorite.id}
          favorite={favorite}
          onRemove={onRemove}
          onUpdate={onUpdate}
          onNavigate={onNavigate}
        />
      ))}
    </ul>
  );
};

export default FavoriteList;
