import { PillProps } from '@/interfaces';
import { cn } from '@/utils/utils';
import React from 'react';
import Button from './Button';

const Pill: React.FC<PillProps> = ({
  name,
  image: Icon,
  handleClick,
  className = '',
}) => {
  const handlePillClick = () => {
    handleClick();
  };
  return (
    <Button
      onClick={handlePillClick}
      className={cn(
        'py-4 text-nowrap flex-col group text-[#616161] font-medium text-xs',
        className
      )}
    >
      {Icon ? <Icon /> : null}
      <span className=''>{name}</span>
    </Button>
  );
};

export default Pill;
