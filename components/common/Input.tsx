import { cn } from '@/utils/utils';
import { InputHTMLAttributes } from 'react';

const Input: React.FC<
  InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    labelStyles?: string;
    inputStyles?: string;
  }
> = ({
  type = 'text',
  label,
  id,
  className,
  labelStyles = '',
  inputStyles = '',
  ...otherProps
}) => {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {label ? (
        <label htmlFor={id} className={cn('font-bold', labelStyles)}>
          {label}
        </label>
      ) : null}
      <input
        type={type}
        name={id}
        id={id}
        className={cn(
          'border w-full border-[#E7E6E6] rounded-[6.26px] h-[50px] resize-none',
          inputStyles
        )}
        {...otherProps}
      />
    </div>
  );
};

export default Input;
