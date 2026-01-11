// src/widgets/weather/ui/WeatherSummary.tsx
import Card from '@/shared/ui/Card';
import { getMinMaxTemp } from '@/entities/weather/utils/getWeatherInfo';
import type { WeatherItem } from '@/entities/weather/types';

interface WeatherSummaryProps {
  data: WeatherItem[];
}

const WeatherSummary = ({ data }: WeatherSummaryProps) => {
  const { minTemp, maxTemp } = getMinMaxTemp(data);

  return (
    <Card as="section" className="bg-white rounded-2xl border border-dashed border-slate-200">
      <p className="text-slate-500 text-sm text-center leading-relaxed">
        오늘 최저 기온은 <strong className="text-blue-500">{minTemp}°</strong>, 최고 기온은&nbsp;
        <strong className="text-red-500">{maxTemp}°</strong> 입니다.
      </p>
    </Card>
  );
};

export default WeatherSummary;
