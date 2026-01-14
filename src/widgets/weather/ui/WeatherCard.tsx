import { MapPin } from 'lucide-react';
import { getCurrentTemp, getMinMaxTemp } from '@/entities/weather/utils/getWeatherInfo';
import FavoriteButton from '@/entities/favorite/ui/FavoriteButton';
import Card from '@/shared/ui/Card';
import type { WeatherItem } from '@/entities/weather/types';

interface WeatherCardProps {
  data: WeatherItem[];
  locationName: string;
  coords: { nx: number; ny: number };
}

const WeatherCard = ({ data, locationName, coords }: WeatherCardProps) => {
  const { minTemp, maxTemp } = getMinMaxTemp(data);
  const currentTemp = getCurrentTemp(data);

  return (
    <Card as="section" className="relative bg-linear-to-br from-blue-500 to-indigo-600 text-white">
      <FavoriteButton coords={coords} locationName={locationName} />
      <h2 className="flex items-center gap-1.5 text-2xl font-semibold mb-1 leading-tight break-keep">
        <MapPin size={22} strokeWidth={2.5} className="shrink-0" />
        {locationName}
      </h2>
      <p className="text-sm opacity-80 mb-2">현재 시간 기준 예보입니다</p>
      <div className="flex justify-between items-end">
        <div>
          <div className="flex">
            <span className="text-8xl font-bold tracking-tighter">{currentTemp}</span>
            <span className="text-4xl mt-1">°</span>
          </div>
          <p className="text-lg mt-4">
            최저 {minTemp}° / 최고 {maxTemp}°
          </p>
        </div>
      </div>
    </Card>
  );
};

export default WeatherCard;
