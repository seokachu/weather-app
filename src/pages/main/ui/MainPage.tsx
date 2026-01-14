import RegionSearch from '@/features/search/ui/RegionSearch';
import { useMainWeather } from '@/features/weather/model/useMainWeather';
import {
  WeatherCard,
  HourlyWeather,
  WeatherSummary,
  WeatherCardSkeleton,
  HourlyWeatherSkeleton,
  WeatherSummarySkeleton,
  WeatherError,
} from '@/widgets/weather';

export const MainPage = () => {
  const { data, isPending, isError, locationName, hasNoLocationData, handleReset, handleLocationSelect } =
    useMainWeather();

  const errorView = (hasNoLocationData || isError) && <WeatherError onReset={handleReset} />;

  const dataView = data && (
    <>
      <WeatherCard data={data.items} locationName={locationName} coords={data.coords} />
      <HourlyWeather data={data.items} />
      <WeatherSummary data={data.items} />
    </>
  );

  return (
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
  );
};
