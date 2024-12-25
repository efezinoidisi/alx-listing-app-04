import { ButtonProps } from '@/interfaces';
import { cn } from '@/utils/utils';

export default function Button({
  children,
  className,
  type = 'button',
  ...otherProps
}: ButtonProps) {
  return (
    <button
      {...otherProps}
      type={type}
      className={cn('flex items-center gap-1 w-fit', className)}
    >
      {children}
    </button>
  );
}
