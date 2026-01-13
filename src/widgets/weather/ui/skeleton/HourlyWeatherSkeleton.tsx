const ITEM_COUNT = 5;

const HourlyWeatherSkeleton = () => {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 animate-pulse">
      <div className="h-5 bg-slate-200 rounded mb-5 w-32"></div>
      <div className="flex gap-6">
        {[...Array(ITEM_COUNT)].map((_, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2">
            <div className="h-4 bg-slate-200 rounded w-12"></div>
            <div className="h-8 bg-slate-200 rounded w-8"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HourlyWeatherSkeleton;
