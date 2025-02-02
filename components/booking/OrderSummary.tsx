import { format } from 'date-fns';
import Image from 'next/image';
import Rating from '../common/Rating';

const OrderSummary: React.FC<{
  bookingDetails: {
    propertyName: string;
    startDate: string;
    totalNights: number;
    bookingFee: number;
    price: number;
    rating: number;
    totalReviews: number;
    propertyImage: string;
  };
}> = ({ bookingDetails }) => {
  const total = bookingDetails.bookingFee + bookingDetails.price;

  const date = new Date(bookingDetails.startDate);

  const startDate = format(date, 'd MMMM yyyy');

  const time = '1PM';

  return (
    <section className='bg-white px-21 md:mr-10 xl:mr-0  border-y border-[#EAEAEA] mt-4 py-6 md:max-w-[342px] lg:max-w-[372px] xl:max-w-[615px] md:border-x md:rounded-[9.1px] h-fit'>
      <h2 className='text-2xl font-bold'>Review Order Details</h2>
      <div className='mt-4'>
        <Image
          src={bookingDetails.propertyImage}
          alt='Property'
          className='w-full h-56 rounded-[10.48px] object-cover bg-[#F3F0F0]'
          width={128}
          height={128}
        />
        <div className='mt-4'>
          <h3 className='text-xl font-bold'>{bookingDetails.propertyName}</h3>
          <div className='text-sm font-medium flex items-center gap-3 mt-4'>
            <Rating rating={bookingDetails.rating} />
            <p className='text-[#929292]'>{`(${bookingDetails.totalReviews} reviews)`}</p>
          </div>
          {/* • */}
          <p className='text-sm text-[#585858] flex items-center gap-2 mt-3'>
            <span className='bg-[#F7F7F7] border border-[#eee] rounded-[2.79px] py-1 px-2'>
              {startDate}
            </span>

            <span className='bg-[#F7F7F7] border border-[#eee] rounded-[2.79px] py-1 px-2'>
              {time}
            </span>
            <span className='bg-[#F7F7F7] border border-[#eee] rounded-[2.79px] py-1 px-2'>
              {bookingDetails.totalNights} Nights
            </span>
          </p>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className='mt-6'>
        <div className='flex justify-between font-semibold'>
          <p className='text-[#8F8F8F]'>Booking Fee</p>
          <p>${bookingDetails.bookingFee}</p>
        </div>
        <div className='flex justify-between mt-3 font-semibold'>
          <p className='text-[#8F8F8F]'>Subtotal</p>
          <p>${bookingDetails.price}</p>
        </div>
        <div className='flex justify-between mt-7 font-semibold'>
          <p>Grand Total</p>
          <p className='font-bold text-xl'>${total}</p>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
