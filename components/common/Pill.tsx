import { PillProps } from '@/interfaces';
import React from 'react';
import Button from './Button';

const Pill: React.FC<{
  pill: PillProps;
  handleClick: () => void;
}> = ({ pill: { name, image: Icon }, handleClick }) => {
  const handlePillClick = () => {
    handleClick();
  };
  return (
    <Button
      onClick={handlePillClick}
      className='py-4 text-nowrap flex-col group'
    >
      <Icon />
      <span className='text-[#616161] font-medium text-xs'>{name}</span>
    </Button>
  );
};

export default Pill;
