import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainPage } from '@/pages/main';
import { FavoritePage } from '@/pages/favorite';
import NotFound from '@/pages/error/NotFound';
import { BottomNav } from '@/shared/ui/layout/BottomNav';

function App() {
  return (
    <BrowserRouter>
      <div className="max-w-md mx-auto min-h-screen bg-slate-50">
        <Routes>
          <Route path="/" element={<Navigate to="/main" replace />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <BottomNav />
    </BrowserRouter>
  );
}

export default App;
