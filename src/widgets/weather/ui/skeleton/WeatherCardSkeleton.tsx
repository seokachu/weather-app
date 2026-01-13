const WeatherCardSkeleton = () => {
  return (
    <div className="bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white animate-pulse">
      <div className="h-7 bg-blue-400/30 rounded mb-2 w-48"></div>
      <div className="h-4 bg-blue-400/30 rounded mb-6 w-32"></div>
      <div className="h-24 bg-blue-400/30 rounded"></div>
    </div>
  );
};

export default WeatherCardSkeleton;
