import { ListingProps } from '@/interfaces';
import React from 'react';
import Button from '../common/Button';
import Card from '../common/Card';

const Listing: React.FC<ListingProps> = ({ listing, sortValue }) => {
  const filteredListings = listing.toSorted((itemA, itemB) => {
    if (sortValue === 'lowest price') {
      return itemA.price - itemB.price;
    }

    return itemB.price - itemA.price;
  });
  return (
    <>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16 mt-9'>
        {filteredListings.map((property) => (
          <Card key={property.name} {...property} />
        ))}
      </div>

      <div className='space-y-[1.125rem] flex flex-col justify-center items-center mt-[8.45rem] font-medium text-xl'>
        <Button className='bg-secondary-100 text-white rounded-[61px] px-[32px] py-[13px]'>
          Show more
        </Button>
        <p>Click to see more listings</p>
      </div>
    </>
  );
};

export default Listing;
