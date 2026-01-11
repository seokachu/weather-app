import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const onClickNavigateMain = () => {
    navigate('/main');
  };

  return (
    <main className="max-w-md mx-auto min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      <section>
        <span className="text-8xl mb-6">🏜️</span>
        <h2 className="text-2xl font-bold mb-2">길을 잃으셨나요?</h2>
        <div className="text-slate-500 mb-8 leading-relaxed">
          <p>찾으시는 페이지가 존재하지 않거나</p>
          <p>주소가 변경되었을 수 있어요.</p>
        </div>
        <button onClick={onClickNavigateMain} className="w-full py-4 bg-cyan-600 text-white rounded-2xl font-bold">
          홈으로 돌아가기
        </button>
      </section>
    </main>
  );
};

export default NotFound;
