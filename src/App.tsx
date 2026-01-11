import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainPage } from '@/pages/main';
import NotFound from './pages/error/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/main" replace />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/favorite" element={<div>즐겨찾기 준비중</div>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
