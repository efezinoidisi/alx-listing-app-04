import useToggle from '@/utils/hooks/use-toggle';
import { cn } from '@/utils/utils';
import React from 'react';
import Button from './Button';

const Dropdown: React.FC<{
  options: string[];
  handleChange: (value: string) => void;
  title: string;
  value: string;
  defaultValue?: string;
  buttonStyles?: string;
  titleWrapperStyles?: string;
  titleStyles?: string;
  valueStyles?: string;
  className?: string;
}> = ({
  options,
  handleChange,
  title,
  value,
  defaultValue = '',
  buttonStyles = '',
  titleStyles = '',
  titleWrapperStyles = '',
  valueStyles = '',
  className = '',
}) => {
  const [showDropdown, toggleDropdown] = useToggle();

  const handleButtonClick = (value: string) => {
    handleChange(value);
    toggleDropdown();
  };

  return (
    <div className={cn('relative', className)}>
      <Button
        className={cn('flex items-center gap-2', titleWrapperStyles)}
        onClick={toggleDropdown}
      >
        <span className={cn('', titleStyles)}>{title}</span>
        <span className={cn('capitalize', valueStyles)}>
          {value || defaultValue}
        </span>
      </Button>
      {showDropdown && (
        <div className='absolute top-full mt-3 w-full py-7 px-5 rounded-xl bg-background text-foreground z-30 shadow-md border border-grey-400 flex flex-col gap-2'>
          {options.map((option) => {
            return (
              <Button
                key={option}
                onClick={() => handleButtonClick(option)}
                className={cn(
                  'capitalize transition-colors duration-200 hover:text-primary',
                  buttonStyles
                )}
              >
                {option}
              </Button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
