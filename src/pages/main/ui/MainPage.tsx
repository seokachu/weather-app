import SearchBar from '@/features/search/ui/SearchBar';
import { useWeather } from '@/entities/weather/queries/useWeather';
import { WeatherCard, HourlyWeather, WeatherSummary } from '@/widgets/weather';
import { BottomNav } from '@/shared/ui/layout/BottomNav';

export const MainPage = () => {
  const { data, isPending, isError, error } = useWeather();

  if (isPending)
    return <div className="p-10 text-center text-slate-500 font-medium">📍 날씨 정보를 불러오는 중...</div>;
  if (isError) return <div className="p-10 text-red-500 text-center">에러: {error.message}</div>;

  return (
    <div className="max-w-md mx-auto min-h-screen bg-slate-50">
      <main className="p-6">
        <SearchBar />
        <WeatherCard data={data} />
        <HourlyWeather data={data} />
        <WeatherSummary data={data} />
      </main>
      <BottomNav />
    </div>
  );
};
