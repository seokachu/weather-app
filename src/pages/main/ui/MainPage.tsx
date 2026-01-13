import RegionSearch from '@/features/search/ui/RegionSearch';
import { WeatherCard, HourlyWeather, WeatherSummary } from '@/widgets/weather';
import WeatherCardSkeleton from '@/widgets/weather/ui/skeleton/WeatherCardSkeleton';
import HourlyWeatherSkeleton from '@/widgets/weather/ui/skeleton/HourlyWeatherSkeleton';
import WeatherSummarySkeleton from '@/widgets/weather/ui/skeleton/WeatherSummarySkeleton';
import WeatherError from '@/widgets/weather/ui/WeatherError';
import { BottomNav } from '@/shared/ui/layout/BottomNav';
import { useMainWeather } from '@/features/weather/model/useMainWeather';

export const MainPage = () => {
  const { data, isPending, isError, locationName, hasNoLocationData, handleReset, handleLocationSelect } =
    useMainWeather();

  const errorView = (hasNoLocationData || isError) && <WeatherError onReset={handleReset} />;

  const dataView = data && (
    <>
      <WeatherCard data={data} locationName={locationName} />
      <HourlyWeather data={data} />
      <WeatherSummary data={data} />
    </>
  );

  return (
    <div className="max-w-md mx-auto min-h-screen bg-slate-50">
      <main className="p-6">
        <RegionSearch onSelect={handleLocationSelect} />
        {isPending ? (
          <div className="mt-6 space-y-6">
            <WeatherCardSkeleton />
            <HourlyWeatherSkeleton />
            <WeatherSummarySkeleton />
            <div className="text-center text-slate-500 text-sm mt-4">🔄 날씨 정보를 불러오는 중...</div>
          </div>
        ) : (
          errorView || dataView || <div className="mt-6 text-center text-slate-500">📍 날씨 정보를 불러오는 중...</div>
        )}
      </main>
      <BottomNav />
    </div>
  );
};
