import { useNavigate } from 'react-router-dom';
import { useFavorites } from '@/entities/favorite/hooks/useFavorites';
import FavoriteEmptyView from '@/entities/favorite/ui/FavoriteEmptyView';
import FavoriteList from '@/entities/favorite/ui/FavoriteList';

export const FavoritePage = () => {
  const { favorites, removeFavorite, updateNickname } = useFavorites();
  const navigate = useNavigate();

  const handleNavigate = (fullAddress: string) => {
    navigate(`/detail/${encodeURIComponent(fullAddress)}`);
  };

  return (
    <div className="p-5 max-w-md mx-auto min-h-screen bg-slate-50 pb-24">
      <h2 className="text-2xl font-bold mb-6">즐겨찾는 지역</h2>

      {favorites.length === 0 ? (
        <FavoriteEmptyView />
      ) : (
        <FavoriteList
          favorites={favorites}
          onRemove={removeFavorite}
          onUpdate={updateNickname}
          onNavigate={handleNavigate}
        />
      )}
    </div>
  );
};
