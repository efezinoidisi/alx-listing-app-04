import { ButtonProps } from '@/interfaces';
import { cn } from '@/utils/utils';

export default function Button({
  children,
  className,
  type = 'button',
  ...otherProps
}: ButtonProps) {
  return (
    <button type={type} className={cn('', className)} {...otherProps}>
      {children}
    </button>
  );
}
