import { RatingProps } from '@/interfaces';
import React from 'react';
import Icons from './Icons';

const Rating: React.FC<RatingProps> = ({ rating }) => {
  if (!rating) return null;
  return (
    <div className='flex items-center gap-1'>
      <Icons.star className='size-3 md:size-4' />
      <span className='text-sm md:text-[1.094rem]'>{rating.toFixed(2)}</span>
    </div>
  );
};

export default Rating;
