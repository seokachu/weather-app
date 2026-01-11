import Card from '@/shared/ui/Card';
import { getCurrentTemp, getMinMaxTemp } from '@/entities/weather/utils/getWeatherInfo';
import type { WeatherItem } from '@/entities/weather/types';

interface WeatherCardProps {
  data: WeatherItem[];
}

const WeatherCard = ({ data }: WeatherCardProps) => {
  const { minTemp, maxTemp } = getMinMaxTemp(data);
  const currentTemp = getCurrentTemp(data);

  return (
    <Card as="section" className="bg-linear-to-br from-blue-500 to-indigo-600 text-white">
      <h2 className="text-2xl font-semibold mb-1">내 주변 날씨</h2>
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
