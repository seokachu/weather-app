interface EmptyWeatherViewProps {
  isLocationDenied?: boolean;
}

export const EmptyWeatherView = ({ isLocationDenied }: EmptyWeatherViewProps) => {
  return (
    <div className="mt-20 text-center text-slate-400">
      <div className="text-6xl mb-6 opacity-50">{isLocationDenied ? '🚫' : '🔍'}</div>
      <p className="text-lg text-slate-500">
        {isLocationDenied ? '위치 권한이 거부되었습니다.' : '궁금한 지역을 검색해보세요!'}
      </p>
      <p className="text-sm mt-2">
        {isLocationDenied
          ? '설정에서 권한을 허용하거나 직접 검색해주세요.'
          : '현재 위치나 즐겨찾기 지역의 날씨를 확인할 수 있습니다.'}
      </p>
    </div>
  );
};
