import Button from '@/shared/ui/Button';

interface WeatherErrorProps {
  message?: string;
  onReset: () => void;
}

const WeatherError = ({ message = '해당 장소의 정보가 제공되지 않습니다.', onReset }: WeatherErrorProps) => {
  return (
    <div className="mt-6 p-6 bg-slate-50 border border-slate-200 rounded-lg text-center">
      <div className="text-4xl mb-3">📍</div>
      <p className="text-slate-600 mb-6">{message}</p>
      <Button onClick={onReset}>내 위치 날씨로 돌아가기</Button>
    </div>
  );
};

export default WeatherError;
