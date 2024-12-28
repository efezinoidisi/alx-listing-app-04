import { RatingProps } from '@/interfaces';
import React from 'react';
import Icons from './Icons';

const Rating: React.FC<RatingProps> = ({ rating }) => {
  return (
    <div className='flex items-center gap-1'>
      <Icons.star />
      <span className=' md:text-[1.094rem]'>{rating.toFixed(2)}</span>
    </div>
  );
};

export default Rating;
