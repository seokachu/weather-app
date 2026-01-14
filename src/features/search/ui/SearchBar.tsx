import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="mb-6 relative">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="지역명 검색 (예: 서울특별시, 종로구, 청운동)"
        className="w-full p-4 pl-12 rounded-2xl bg-white shadow-xs border border-slate-100 focus:ring-1 focus:ring-blue-200 transition-all"
        autoFocus
      />
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
        <Search size={20} strokeWidth={2.5} />
      </div>
    </div>
  );
};

export default SearchBar;
