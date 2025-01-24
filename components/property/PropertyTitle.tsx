import { type PropertyTitleProps } from '@/interfaces';
import { cn } from '@/utils/utils';
import React from 'react';
import Icons from '../common/Icons';
import Rating from '../common/Rating';

const PropertyTitle: React.FC<PropertyTitleProps> = ({
  name,
  city,
  country,
  rating,
  reviewsLength,
  className = '',
}) => {
  return (
    <div className={cn('', className)}>
      <h1 className='text-22 md:text-39 lg:text-50 font-bold'>{name}</h1>
      <div className='flex items-center space-x-2 mt-2'>
        <div className='flex items-center gap-2 text-xs md:text-lg lg:text-22 text-nowrap'>
          <Rating rating={rating} />
          {reviewsLength ? (
            <span className='text-[#929292]'>{`(${reviewsLength} reviews)`}</span>
          ) : null}
        </div>
        <div className='text-[#929292] flex items-center gap-1 overflow-hidden'>
          <Icons.location className='w-4 md:w-6 lg:w-8' />
          <span className='truncate'>
            {city}, {country}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyTitle;
