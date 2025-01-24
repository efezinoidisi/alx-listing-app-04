import { PropertyProps } from '@/interfaces/index';
import Image from 'next/image';
import Button from '../common/Button';
import Icons from '../common/Icons';
import Offers from '../common/Offers';
import BookingSection from './BookingSection';
import PropertyTitle from './PropertyTitle';
import Tabs from './Tabs';

const PropertyDetail: React.FC<{
  property: PropertyProps;
  goBack: () => void;
}> = ({ property, goBack }) => {
  return (
    <section className='md:px-10 lg:px-60 mb-32'>
      <div>
        <div className='flex items-center justify-between  w-full py-2 px-21 md:hidden'>
          <Button className='flex items-center gap-2' onClick={goBack}>
            <Icons.backArrow />
            <span className='font-semibold'>Return</span>
          </Button>

          <div className='flex items-center gap-10'>
            <Button>
              <Icons.heart />
              <span className='sr-only'>Save</span>
            </Button>

            <Button>
              <Icons.share />
              <span className='sr-only'>Share</span>
            </Button>
          </div>
        </div>
        <div className='hidden md:block'>
          <PropertyTitle
            name={property.name}
            rating={property.rating}
            reviewsLength={property.reviews.length}
            city={property.address.city}
            country={property.address.country}
          />
        </div>
      </div>
      {/* Image Grid */}
      <div className='grid grid-cols-2 gap-4 mt-4 mb-3'>
        <Image
          src={property.image}
          alt={property.name}
          width={300}
          height={300}
          className='col-span-2 w-full h-96 object-cover md:rounded-lg bg-grey-600'
        />
        {/* Add more images */}
      </div>

      <div className='px-21 md:hidden'>
        <PropertyTitle
          name={property.name}
          rating={property.rating}
          reviewsLength={property.reviews.length}
          city={property.address.city}
          country={property.address.country}
        />
      </div>

      <Offers
        offers={property.offers}
        className='border-none rounded-none flex-wrap md:flex-nowrap'
        offerClassName='border border-grey-200 rounded-[19.45px] p-[6.98px_15.56px]'
        type='detail'
      />

      <div className='relative md:flex md:gap-10 mt-11'>
        <div className='md:w-3/5'>
          {/* Description */}
          <div className='px-21 md:px-0 scroll-mt-20' id='Description'>
            <Tabs />
            <p>{property.description}</p>
          </div>

          {/* Amenities */}
          <div
            className='mt-4 py-14 border-t border-[#E6E6E6] px-21 md:px-0'
            id='What we offer'
          >
            <h2 className='text-xl md:text-2xl font-bold mb-6'>
              What this place offers
            </h2>
            <p className='text-lg font-medium'>
              Each home is fully equipped to meet your needs, with ample space
              and privacy.
            </p>
            <ul className='flex flex-wrap gap-4 mt-7'>
              {property.category.map((amenity, index) => (
                <li key={index} className='bg-gray-200 p-2 rounded-md'>
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <BookingSection price={property.price} />
      </div>
    </section>
  );
};

export default PropertyDetail;
