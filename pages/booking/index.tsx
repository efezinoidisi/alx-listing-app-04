import BookingForm from '@/components/booking/BookingForm';
import CancellationPolicy from '@/components/booking/CancellationPolicy';
import OrderSummary from '@/components/booking/OrderSummary';
import Button from '@/components/common/Button';
import Icons from '@/components/common/Icons';
import { PROPERTYLISTINGSAMPLE } from '@/constants';
import { BookingFormData } from '@/interfaces';
import axios from 'axios';
import { differenceInCalendarDays } from 'date-fns';
import { ChangeEvent, useState } from 'react';
import { toast } from 'sonner';

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

  const [formData, setFormData] = useState<BookingFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    billingAddress: {
      state: '',
      street: '',
      city: '',
      country: '',
      zip: '',
      apartment: '',
    },
  });

  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async () => {
    // TODO: add validation for form data

    setIsSending(true);

    try {
      const response = await axios.post('/api/bookings', formData);

      if (response.status === 200) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      console.log(error);

      toast.error('Failed to submit booking.');
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    isBilling: boolean = false
  ) => {
    const { name, value } = event.target;
    if (isBilling) {
      setFormData((prev) => ({
        ...prev,
        billingAddress: {
          ...prev.billingAddress,
          [name]: value,
        },
      }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
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
          <BookingForm formData={formData} handleChange={handleChange} />
          <CancellationPolicy />
        </div>
        <OrderSummary bookingDetails={bookingDetails} />
      </div>

      {/* Submit Button */}
      <div className='w-full md:max-w-[240px] xl:max-w-[346px] px-21 md:ml-10 xl:m-0 md:p-0'>
        <Button
          className='mt-6 bg-primary text-white py-2 px-4 rounded-md w-full h-[50px] disabled:bg-gray-300 items-center justify-center'
          disabled={isSending}
          onClick={handleSubmit}
        >
          {isSending ? 'Processing...' : 'Confirm & Pay'}
        </Button>
      </div>
    </main>
  );
}
