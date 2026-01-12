import type { LocationType } from '../model/locationData';

interface SearchListItemProps {
  location: LocationType;
  onSelect: (location: LocationType) => void;
}

const SearchListItem = ({ location, onSelect }: SearchListItemProps) => {
  return (
    <li
      className="p-3 hover:bg-slate-50 cursor-pointer rounded-lg border-b last:border-0 border-slate-50"
      onClick={() => onSelect(location)}
    >
      <div className="flex flex-col">
        <span className="text-sm font-bold">{location.level3 || location.level2}</span>
        <span className="text-xs text-slate-500 mt-1 leading-tight">{location.fullAddress}</span>
      </div>
    </li>
  );
};

export default SearchListItem;
