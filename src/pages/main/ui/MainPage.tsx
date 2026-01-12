import { useState } from 'react';
import RegionSearch from '@/features/search/ui/RegionSearch';
import { useWeather } from '@/entities/weather/queries/useWeather';
import { WeatherCard, HourlyWeather, WeatherSummary } from '@/widgets/weather';
import { BottomNav } from '@/shared/ui/layout/BottomNav';
import type { LocationType } from '@/features/search/model/locationData';

export const MainPage = () => {
  const [locationName, setLocationName] = useState('내 주변 날씨');

  const { data, isPending, isError, error } = useWeather();

  const handleLocationSelect = (location: LocationType) => {
    setLocationName(location.fullAddress);
  };

  if (isPending)
    return <div className="p-10 text-center text-slate-500 font-medium">📍 날씨 정보를 불러오는 중...</div>;
  if (isError) return <div className="p-10 text-red-500 text-center">에러: {error.message}</div>;

  return (
    <div className="max-w-md mx-auto min-h-screen bg-slate-50">
      <main className="p-6">
        <RegionSearch onSelect={handleLocationSelect} />
        <WeatherCard data={data} locationName={locationName} />
        <HourlyWeather data={data} />
        <WeatherSummary data={data} />
      </main>
      <BottomNav />
    </div>
  );
};
