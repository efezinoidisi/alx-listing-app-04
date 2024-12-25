import { ICON_SIZE } from '@/constants';
import { MobileSearchBarProps } from '@/interfaces';
import { formatDate } from '@/utils/utils';
import { Search, X } from 'lucide-react';
import React from 'react';
import DatePicker from 'react-multi-date-picker';
// import 'react-multi-date-picker/styles/layouts/mobile.css';
import Button from './common/Button';

const MobileSearchBar: React.FC<MobileSearchBarProps> = ({
  closeModal,
  searchValues,
  handleChange,
  handleDatePickerChange,
  clearAllSearchValues,
  handleSearch,
}) => {
  return (
    <div className='fixed inset-0 bg-white px-21 py-5 flex flex-col gap-6'>
      <Button
        aria-label='close search'
        onClick={closeModal}
        className='border border-grey-100 rounded-full p-2 text-secondary-100'
      >
        <X size={25} />
      </Button>
      <div className='shadow-md rounded-lg py-5 px-2'>
        <h2 className='font-semibold text-3xl my-5'>Where to?</h2>

        <label className='relative'>
          <Search className='text-grey-100 absolute top-1/2 -translate-y-1/2 left-4' />
          <span className='sr-only'>destination</span>
          <input
            type='search'
            name='location'
            id='location'
            value={searchValues.location}
            onChange={handleChange}
            className='border w-full h-14 rounded-50 pl-12 pr-4'
            placeholder='Search destinations'
          />
        </label>
      </div>

      <div className='w-full shadow-md rounded-lg py-5 px-2'>
        <DatePicker
          value={searchValues.dates}
          onChange={(dateObj) => {
            handleDatePickerChange(dateObj);
          }}
          range
          render={(value, openCalendar) => {
            const values = value.split('~');

            const from = values[0] || '';

            const to = values[1] || '';
            return (
              <Button onClick={openCalendar} className='justify-between w-full'>
                <span className='text-gray-500'>When</span>
                <span>
                  {value
                    ? `${formatDate(from, { month: 'short', day: '2-digit' })}${
                        to &&
                        ' - ' +
                          formatDate(to, { month: 'short', day: '2-digit' })
                      }`
                    : 'Add dates'}
                </span>
              </Button>
            );
          }}
          minDate={new Date()}
          containerClassName='w-full'
        />
      </div>

      <div className='shadow-md rounded-lg py-5 px-2 w-full'>
        <Button className='justify-between w-full'>
          <span className='text-gray-500'>Who</span>

          <span>
            {searchValues.people ? searchValues.people : 'Add guests'}
          </span>
        </Button>
      </div>

      <div className='flex items-center justify-between mt-auto'>
        <Button className='underline' onClick={clearAllSearchValues}>
          Clear all
        </Button>

        <Button
          className='bg-primary text-white rounded-50 px-4 py-2 text-xl font-medium gap-3'
          onClick={handleSearch}
        >
          <Search size={ICON_SIZE} />
          <span>Search</span>
        </Button>
      </div>
    </div>
  );
};

export default MobileSearchBar;
