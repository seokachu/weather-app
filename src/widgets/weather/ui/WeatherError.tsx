import Button from '@/shared/ui/Button';

interface WeatherErrorProps {
  message?: string;
  onReset: () => void;
}

const WeatherError = ({ message = '해당 장소의 정보가 제공되지 않습니다.', onReset }: WeatherErrorProps) => {
  return (
    <div className="mt-10 p-8 bg-white border border-slate-100 rounded-3xl text-center">
      <div className="text-4xl mb-4">📍</div>
      <p className="text-slate-600 mb-6">{message}</p>
      <Button onClick={onReset} className="w-full py-3">
        내 위치 날씨로 돌아가기
      </Button>
    </div>
  );
};

export default WeatherError;
