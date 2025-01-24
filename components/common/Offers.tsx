import { Offer } from '@/interfaces';
import { cn } from '@/utils/utils';
import React from 'react';
import Icons from './Icons';

const Offers: React.FC<{
  offers: Offer;
  className?: string;
  offerClassName?: string;
  type?: 'detail' | 'card';
}> = ({ offers, className = '', offerClassName = '', type = 'card' }) => {
  return (
    <div
      className={cn(
        'flex items-center gap-2 border w-fit border-grey-200 rounded-[26.05px] py-2 px-4',
        className
      )}
    >
      <div
        className={cn('flex items-center gap-2 text-nowrap', offerClassName)}
      >
        <Icons.bed className='size-3 md:size-[19.76px]' />
        <span className='font-medium text-xs'>
          {`${offers.bed}${type === 'detail' ? ' Bedrooms' : ''}`}{' '}
        </span>
      </div>
      <div
        className={cn('flex items-center gap-2 text-nowrap', offerClassName)}
      >
        <Icons.shower className='size-3 md:size-[19.76px]' />
        <span className='font-medium text-xs'>{`${offers.shower}${
          type === 'detail' ? ' Bathroom' : ''
        }`}</span>
      </div>
      <div
        className={cn('flex items-center gap-2 text-nowrap', offerClassName)}
      >
        <Icons.people className='size-3 md:size-[19.76px]' />
        <span className='font-medium text-xs'>{`${offers.occupants}${
          type === 'detail' ? ' Guests' : ''
        }`}</span>
      </div>
    </div>
  );
};

export default Offers;
