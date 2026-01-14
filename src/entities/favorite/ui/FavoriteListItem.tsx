import { useState } from 'react';
import toast from 'react-hot-toast';
import { Pencil, Star } from 'lucide-react';
import FavoriteEditForm from './FavoriteEditForm';
import { TOAST_MESSAGES } from '@/shared/constants/toastmessages';
import type { FavoriteLocation } from '../types';

interface FavoriteItemProps {
  favorite: FavoriteLocation;
  onRemove: (id: string) => void;
  onUpdate: (id: string, newName: string) => void;
  onNavigate: (address: string) => void;
}

const FavoriteListItem = ({ favorite, onRemove, onUpdate, onNavigate }: FavoriteItemProps) => {
  const [isEditing, setIsEditing] = useState(false);

  if (!favorite) return null;

  const handleUpdate = (newName: string) => {
    if (newName.trim() && newName !== favorite.name) {
      onUpdate(favorite.id, newName.trim());
      toast.success(TOAST_MESSAGES.FAVORITE.UPDATE);
    }
    setIsEditing(false);
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRemove(favorite.id);
    toast.success(TOAST_MESSAGES.FAVORITE.REMOVE);
  };

  return (
    <li
      onClick={() => !isEditing && onNavigate(favorite.fullAddress)}
      className="relative flex items-center p-4 bg-white border border-slate-100 rounded-2xl shadow-sm cursor-pointer hover:bg-slate-50 active:bg-slate-100 transition-colors gap-4"
    >
      <button onClick={handleRemove} className="text-yellow-400 hover:text-slate-300 transition-colors shrink-0">
        <Star size={24} fill="currentColor" strokeWidth={1.5} />
      </button>

      <div className="flex-1 min-w-0 pr-6">
        {isEditing ? (
          <FavoriteEditForm initialName={favorite.name} onSave={handleUpdate} />
        ) : (
          <span className="font-semibold text-lg truncate block">{favorite.name}</span>
        )}
        <p className="text-xs text-slate-400 truncate">{favorite.fullAddress}</p>
      </div>

      {!isEditing && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsEditing(true);
          }}
          className="absolute top-3 right-3 p-1 text-slate-300 hover:text-cyan-600 transition-all"
          title="수정"
        >
          <Pencil size={16} />
        </button>
      )}
    </li>
  );
};

export default FavoriteListItem;
