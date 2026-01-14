import HourlyWeatherSkeleton from './HourlyWeatherSkeleton';
import WeatherCardSkeleton from './WeatherCardSkeleton';
import WeatherSummarySkeleton from './WeatherSummarySkeleton';

export const WeatherSkeletonView = () => {
  return (
    <div className="mt-6 space-y-6 animate-pulse">
      <WeatherCardSkeleton />
      <HourlyWeatherSkeleton />
      <WeatherSummarySkeleton />
      <div className="text-center text-slate-400 text-sm mt-4 italic">날씨 정보를 불러오는 중입니다...</div>
    </div>
  );
};
