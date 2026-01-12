interface BottomNavItemProps {
  label: string;
  path: string;
  icon: string;
  isActive: boolean;
  onClick: (path: string) => void;
}

const BottomNavItem = ({ label, path, icon, isActive, onClick }: BottomNavItemProps) => {
  const activeClass = isActive ? 'text-cyan-600 font-bold' : 'text-slate-400';

  return (
    <li className="flex-1">
      <button onClick={() => onClick(path)} className={`w-full flex flex-col items-center gap-1 ${activeClass}`}>
        <span className="text-2xl">{icon}</span>
        <span className="text-xs">{label}</span>
      </button>
    </li>
  );
};

export default BottomNavItem;
