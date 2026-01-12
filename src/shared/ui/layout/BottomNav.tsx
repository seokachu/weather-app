import { useNavigate, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '@/shared/constants/navigation';
import BottomNavItem from './BottomNavItem';

export const BottomNav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onClickNavItem = (path: string) => {
    navigate(path);
  };

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white/80 border-t border-slate-100 px-10 py-3">
      <ul className="flex justify-center items-center list-none p-0 m-0">
        {NAV_ITEMS.map((item) => (
          <BottomNavItem key={item.path} {...item} isActive={pathname === item.path} onClick={onClickNavItem} />
        ))}
      </ul>
    </nav>
  );
};
