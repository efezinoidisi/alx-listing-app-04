import useMediaQuery from '@/hooks/useMediaQuery';
import { formatDate } from '@/utils/utils';
import { differenceInCalendarDays } from 'date-fns';
import { useState } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import Button from '../common/Button';

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [dates, setDates] = useState(['', '']);
  const handleDatePickerChange = (dateObject: DateObject[]) => {
    setDates([dateObject[0]?.toString(), dateObject[1]?.toString()]);
  };

  const isNotMobileDevice = useMediaQuery('(min-width: 768px)');

  const isDatesValid = dates.every((val) => val);

  const numberOfDays =
    (isDatesValid && differenceInCalendarDays(dates[1], dates[0])) || 0;

  const weeklyDiscounts = 100;

  const serviceFee = 90;

  const totalDaysCharge = price * numberOfDays;

  const total = totalDaysCharge
    ? totalDaysCharge + serviceFee - weeklyDiscounts
    : price;

  return (
    <div className='bg-white p-4 shadow-md fixed bottom-0 z-50 w-full flex items-center justify-between md:flex-col border-t border-[#C5C5C5] md:sticky md:top-5 md:w-2/5 md:h-fit md:bottom-auto md:border-none md:rounded-[13px] md:max-w-96 lg:max-w-md md:items-start'>
      <div className='w-full'>
        <h3 className='text-xl md:text-2xl font-bold'>
          ${price}
          <sub className='text-[#8E8E8E]'>/night</sub>
        </h3>
        <hr className='hidden md:block md:border-[#E6E6E6] my-5' />
        <div className='w-full'>
          <DatePicker
            value={dates}
            onChange={(dateObj) => {
              handleDatePickerChange(dateObj);
            }}
            range
            render={(value, openCalendar) => {
              const values = value.split('~');

              const from = values[0] || '';

              const to = values[1] || '';

              return (
                <Button
                  onClick={openCalendar}
                  className='flex-col w-full items-start gap-2'
                >
                  <span className='text-secondary-100 hidden md:inline font-bold text-lg'>
                    Check in
                  </span>

                  <span className='text-grey-100 md:border border-grey-700 inline-block w-full py-2 text-left px-2 rounded-md'>
                    {value
                      ? `${formatDate(from, {
                          month: 'short',
                          day: '2-digit',
                        })}${
                          !isNotMobileDevice && to
                            ? ` - ${formatDate(to, {
                                month: 'short',
                                day: '2-digit',
                              })}`
                            : ''
                        }`
                      : 'Add date'}
                  </span>
                </Button>
              );
            }}
            minDate={new Date()}
            containerClassName='w-full'
            numberOfMonths={isNotMobileDevice ? 2 : 1}
          />
        </div>

        <div className='hidden md:block mt-6 mb-5'>
          <DatePicker
            value={dates}
            onChange={(dateObj) => {
              handleDatePickerChange(dateObj);
            }}
            range
            render={(value, openCalendar) => {
              const values = value.split('~');

              const to = values[1] || '';

              return (
                <Button
                  onClick={openCalendar}
                  className='flex-col w-full items-start gap-2'
                >
                  <span className='text-secondary-100 font-bold text-lg'>
                    Check out
                  </span>
                  <span className='text-grey-100 border border-grey-700 inline-block w-full py-2 text-left px-2 rounded-md'>
                    {to
                      ? `${formatDate(to, {
                          month: 'short',
                          day: '2-digit',
                        })}`
                      : 'Add date'}
                  </span>
                </Button>
              );
            }}
            minDate={new Date()}
            containerClassName='w-full'
            numberOfMonths={2}
          />
        </div>

        {numberOfDays ? (
          <div className='space-y-4'>
            <p className='flex items-center justify-between w-full font-bold text-sm lg:text-lg'>
              <span className='text-[#8F8F8F]'>{`$${price} x ${numberOfDays} nights`}</span>
              <strong>{`$${totalDaysCharge}`}</strong>
            </p>

            <p className='flex items-center justify-between w-full text-sm font-bold lg:text-lg'>
              <span className='text-[#8F8F8F]'>Weekly discounts</span>

              <strong>{`-$${weeklyDiscounts}`}</strong>
            </p>

            <p className='flex items-center justify-between w-full text-sm md:text-lg font-bold'>
              <span className='text-[#8F8F8F]'>Service fee</span>
              <strong>{`$${serviceFee}`}</strong>
            </p>
          </div>
        ) : null}

        <hr className='hidden md:block md:border-[#E6E6E6] mt-14 mb-2' />

        {/* Total payment */}
        <div className='mt-4 hidden md:block'>
          <p className='flex items-center justify-between w-full font-bold text-sm lg:text-lg'>
            <span className='text-[#8F8F8F]'>Total payment: </span>
            <strong className='text-primary'>${total}</strong>
          </p>
        </div>
      </div>

      {/* Reserve button */}
      <Button className='mt-4 bg-green-500 text-white py-2 px-4 rounded-md md:w-full justify-center'>
        Reserve now
      </Button>
    </div>
  );
};

export default BookingSection;
