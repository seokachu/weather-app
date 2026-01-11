import { getHourlyForecast } from '@/entities/weather/utils/getWeatherInfo';
import Card from '@/shared/ui/Card';
import type { WeatherItem } from '@/entities/weather/types';
import HourlyForecastItem from './HourlyForecastItem';

interface HourlyWeatherProps {
  data: WeatherItem[];
}

const HourlyWeather = ({ data }: HourlyWeatherProps) => {
  const hourlyForecast = getHourlyForecast(data);

  return (
    <Card as="section" className="bg-white border border-slate-100 p-6 mb-6">
      <h3 className="font-bold mb-5 text-sm tracking-wider">시간대별 날씨</h3>
      <ul className="flex gap-6 overflow-x-auto pb-2 scrollbar-hide">
        {hourlyForecast.map((item, idx) => (
          <HourlyForecastItem key={idx} time={item.fcstTime} temp={item.fcstValue} />
        ))}
      </ul>
    </Card>
  );
};

export default HourlyWeather;
