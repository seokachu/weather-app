import type { LucideIcon } from 'lucide-react';

interface BottomNavItemProps {
  label: string;
  path: string;
  icon: LucideIcon;
  isActive: boolean;
  onClick: (path: string) => void;
}

const BottomNavItem = ({ label, path, icon: Icon, isActive, onClick }: BottomNavItemProps) => {
  const activeClass = isActive ? 'text-cyan-600 font-bold' : 'text-slate-400';

  return (
    <li className="flex-1">
      <button
        onClick={() => onClick(path)}
        className={`w-full flex flex-col items-center gap-1 transition-colors ${activeClass}`}
      >
        <Icon
          size={24}
          strokeWidth={isActive ? 2.5 : 2}
          fill={isActive && label === '즐겨찾기' ? 'currentColor' : 'none'}
        />
        <span className="text-xs">{label}</span>
      </button>
    </li>
  );
};

export default BottomNavItem;
