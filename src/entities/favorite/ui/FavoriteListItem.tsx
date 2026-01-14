import { useState } from 'react';

interface FavoriteItemProps {
  favorite: { id: string; name: string; fullAddress: string };
  onRemove: (id: string) => void;
  onUpdate: (id: string, newName: string) => void;
  onNavigate: (address: string) => void;
}

const FavoriteListItem = ({ favorite, onRemove, onUpdate, onNavigate }: FavoriteItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(favorite.name);

  const handleSave = () => {
    if (tempName.trim() && tempName !== favorite.name) {
      onUpdate(favorite.id, tempName.trim());
    }
    setIsEditing(false);
  };

  return (
    <li className="flex justify-between items-center p-4 bg-white border border-slate-100 rounded-2xl shadow-sm transition-all">
      <div className="flex-1 cursor-pointer" onClick={() => !isEditing && onNavigate(favorite.fullAddress)}>
        {isEditing ? (
          <input
            autoFocus
            className="border-b-2 border-blue-400 outline-none font-semibold text-lg text-slate-700 w-full bg-blue-50 px-1"
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSave()}
            onBlur={handleSave}
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-lg text-slate-700">{favorite.name}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsEditing(true);
              }}
              className="text-[10px] text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded hover:bg-slate-100"
            >
              수정
            </button>
          </div>
        )}
        <p className="text-xs text-slate-400">{favorite.fullAddress}</p>
      </div>

      <button
        onClick={() => onRemove(favorite.id)}
        className="ml-4 text-red-400 text-sm font-medium p-2 hover:bg-red-50 rounded-lg"
      >
        삭제
      </button>
    </li>
  );
};

export default FavoriteListItem;
