import type { ComponentPropsWithoutRef, ElementType } from 'react';

type CardProps<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

const Card = <T extends ElementType = 'div'>({ as, className = '', children, ...props }: CardProps<T>) => {
  const Component = as || 'div';
  return (
    <Component className={`p-8 rounded-[40px] mb-8 shadow-sm ${className}`} {...props}>
      {children}
    </Component>
  );
};

export default Card;
