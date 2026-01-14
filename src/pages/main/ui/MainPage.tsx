import { useMainWeather } from '@/features/weather/model/useMainWeather';
import { useDetailWeather } from '@/features/weather/model/useDetailWeather';
import { useLocationPermission } from '@/features/weather/model/useLocationPermission';
import { MainHeader } from '@/widgets/layout/MainHeader';
import { EmptyWeatherView } from '@/widgets/weather/ui/EmptyWeatherView';
import { WeatherError, WeatherSkeletonView } from '@/widgets/weather';
import { WeatherContentView } from '@/widgets/weather/ui/WeatherContentView';

export const MainPage = ({ isDetail = false }: { isDetail?: boolean }) => {
  const locationError = useLocationPermission(isDetail);
  const { data, isPending, isError, locationName, hasNoLocationData, handleReset, handleLocationSelect } =
    useMainWeather();
  useDetailWeather(isDetail, handleLocationSelect);

  const renderContent = () => {
    if (isPending) return <WeatherSkeletonView />;

    if (locationError && !data && !locationName) {
      return <EmptyWeatherView isLocationDenied={true} />;
    }

    if (data) {
      return <WeatherContentView data={data} locationName={locationName} />;
    }

    if (isError || hasNoLocationData) {
      return <WeatherError onReset={handleReset} />;
    }

    return <EmptyWeatherView isLocationDenied={false} />;
  };

  return (
    <main className="p-6">
      <MainHeader
        isDetail={isDetail}
        locationError={locationError}
        locationName={locationName}
        onLocationSelect={handleLocationSelect}
      />
      {renderContent()}
    </main>
  );
};
