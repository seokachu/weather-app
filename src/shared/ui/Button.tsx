import { cn } from '@/shared/lib/clsx';
import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, className = '', ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'w-full py-4 bg-cyan-600 text-white rounded-2xl font-bold hover:bg-cyan-700 transition-colors',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
