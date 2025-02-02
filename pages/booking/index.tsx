import BookingForm from '@/components/booking/BookingForm';
import CancellationPolicy from '@/components/booking/CancellationPolicy';
import OrderSummary from '@/components/booking/OrderSummary';
import Button from '@/components/common/Button';
import Icons from '@/components/common/Icons';
import { PROPERTYLISTINGSAMPLE } from '@/constants';
import { differenceInCalendarDays } from 'date-fns';

export default function BookingPage() {
  const property = PROPERTYLISTINGSAMPLE[0];

  const dates = ['02-04-2025', '02-07-2025'];

  const totalNights = differenceInCalendarDays(dates[1], dates[0]);

  const bookingDetails = {
    propertyName: 'Villa Arrecife Beach House',
    totalNights,
    startDate: dates[0],
    bookingFee: totalNights ? totalNights * property.price : property.price,
    price: property.price,
    rating: property.rating,
    totalReviews: property.reviews.length,
    propertyImage: property.image,
  };

  return (
    <main className='container mx-auto'>
      <div className='border-b border-[#EBEBEB] bg-[#F8FAFC] -mt-3 px-21 xl:hidden'>
        <Button className='text-primary w-fit border-b border-primary py-5 gap-3 font-bold'>
          <Icons.backArrow className='filter-primary' />
          Booking
        </Button>
      </div>
      <div className='flex flex-col-reverse md:grid md:grid-cols-[1fr_auto] gap-6 md:gap-10'>
        <div className='px-21 md:ml-10 xl:m-0 md:p-0 md:mt-4 md:py-6 w-full'>
          <BookingForm />
          <CancellationPolicy />
        </div>
        <OrderSummary bookingDetails={bookingDetails} />
      </div>
    </main>
  );
}
