import { PillProps } from '@/interfaces';
import React from 'react';
import Button from './Button';

const Pill: React.FC<{
  pill: PillProps;
  handleClick: () => void;
}> = ({ pill: { name }, handleClick }) => {
  const handlePillClick = () => {
    handleClick();
  };
  return (
    <Button onClick={handlePillClick} className='py-4 text-nowrap'>
      <span>{name}</span>
    </Button>
  );
};

export default Pill;
