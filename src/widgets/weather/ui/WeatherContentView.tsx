import { WeatherCard, HourlyWeather, WeatherSummary } from '..';
import type { WeatherData } from '@/entities/weather/types';

interface WeatherContentViewProps {
  data: WeatherData;
  locationName: string;
}

export const WeatherContentView = ({ data, locationName }: WeatherContentViewProps) => {
  return (
    <>
      <WeatherCard data={data.items} locationName={locationName} coords={data.coords} />
      <HourlyWeather data={data.items} />
      <WeatherSummary data={data.items} />
    </>
  );
};
