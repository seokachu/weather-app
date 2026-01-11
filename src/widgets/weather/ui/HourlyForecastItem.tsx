interface HourlyForecastItemProps {
  time: string;
  temp: string;
}

const HourlyForecastItem = ({ time, temp }: HourlyForecastItemProps) => {
  return (
    <li className="flex flex-col items-center min-w-11.25 shrink-0">
      <span className="text-xs text-slate-400 mb-3">{time.slice(0, 2)}시</span>
      <span className="font-semibold">{temp}°</span>
    </li>
  );
};

export default HourlyForecastItem;
