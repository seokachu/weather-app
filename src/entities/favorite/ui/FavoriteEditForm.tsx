import { useState } from 'react';
import { XCircle } from 'lucide-react';

interface FavoriteEditFormProps {
  initialName: string;
  onSave: (newName: string) => void;
}

const FavoriteEditForm = ({ initialName, onSave }: FavoriteEditFormProps) => {
  const [tempName, setTempName] = useState(initialName);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') onSave(tempName);
  };

  return (
    <div className="relative w-full flex items-center" onClick={(e) => e.stopPropagation()}>
      <input
        autoFocus
        className="border-b-2 border-cyan-600 font-semibold text-lg w-full px-1 pr-8 outline-none transition-all"
        value={tempName}
        onChange={(e) => setTempName(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={() => onSave(tempName)}
      />

      {tempName.length > 0 && (
        <button
          type="button"
          className="absolute right-1 text-slate-300 hover:text-slate-500 transition-colors"
          onMouseDown={(e) => {
            e.preventDefault();
            setTempName('');
          }}
        >
          <XCircle size={18} fill="currentColor" className="text-white fill-slate-300" />
        </button>
      )}
    </div>
  );
};

export default FavoriteEditForm;
