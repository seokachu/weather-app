import { useState } from 'react';
import SearchBar from './SearchBar';
import SearchList from './SearchList';
import { flattenedLocations, type LocationType } from '../model/locationData';

interface RegionSearchProps {
  onSelect: (location: LocationType) => void;
}

const RegionSearch = ({ onSelect }: RegionSearchProps) => {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState<LocationType[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim().length > 0) {
      const matches = flattenedLocations.filter((location) => location.fullAddress.includes(value)).slice(0, 20);
      setFiltered(matches);
    } else {
      setFiltered([]);
    }
  };

  const handleSelect = (location: LocationType) => {
    const displayName = location.level3 || location.level2 || location.level1;
    setQuery(displayName);
    setFiltered([]);

    onSelect(location);
  };

  return (
    <div className="relative w-full">
      <SearchBar value={query} onChange={handleSearch} />
      <SearchList filtered={filtered} onSelect={handleSelect} />
    </div>
  );
};

export default RegionSearch;
