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

  const numberOfDays =
    (dates[1] && dates[0] && differenceInCalendarDays(dates[1], dates[0])) || 0;

  return (
    <div className='bg-white p-4 shadow-md fixed bottom-0 z-50 w-full flex items-center justify-between md:flex-col border-t border-[#C5C5C5] md:sticky md:top-5 md:w-2/5 md:h-fit md:bottom-auto md:border-none md:rounded-[13px]'>
      <div>
        <h3 className='text-xl font-semibold'>
          ${price}
          <sub>/night</sub>
        </h3>
        <div className=''>
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
                <Button onClick={openCalendar} className='flex-col pr-5'>
                  <span className='text-secondary-100 hidden md:inline'>
                    Check in
                  </span>

                  <span className='text-grey-100'>
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

        <div className='hidden md:block'>
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
                <Button onClick={openCalendar} className='flex-col pr-5'>
                  <span className='text-secondary-100'>Check out</span>
                  <span className='text-grey-100'>
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

        {/* Total payment */}
        <div className='mt-4 hidden md:block'>
          <p>
            Total payment: <strong>${price * 7}</strong>
          </p>
        </div>
      </div>

      {/* Reserve button */}
      <button className='mt-4 bg-green-500 text-white py-2 px-4 rounded-md'>
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
