import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainPage } from '@/pages/main';
import { FavoritePage } from '@/pages/favorite';
import NotFound from './pages/error/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/main" replace />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
