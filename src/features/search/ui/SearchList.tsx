import Card from '@/shared/ui/Card';
import SearchListItem from './SearchListItem';
import type { LocationType } from '../model/locationData';

interface SearchListProps {
  filtered: LocationType[];
  onSelect: (location: LocationType) => void;
}

const SearchList = ({ filtered, onSelect }: SearchListProps) => {
  if (filtered.length === 0) return null;

  return (
    <Card className="absolute top-full left-0 right-0 z-50 mt-2 p-2 shadow-xl border-slate-200 bg-white">
      <ul className="max-h-80 overflow-y-auto scrollbar-hide">
        {filtered.map((location, idx) => (
          <SearchListItem key={`${location.fullAddress}-${idx}`} location={location} onSelect={onSelect} />
        ))}
      </ul>
    </Card>
  );
};

export default SearchList;
