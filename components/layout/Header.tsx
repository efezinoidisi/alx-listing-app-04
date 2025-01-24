import { HeaderSearchValues } from '@/interfaces';
import useToggle from '@/utils/hooks/use-toggle';
import { formatDate } from '@/utils/utils';
import { Search } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import Button from '../common/Button';
import Icons from '../common/Icons';
import MobileSearchBar from '../MobileSearchBar';
import SearchInput from '../SearchInput';
import UserProfileLink from '../UserProfileLink';

const Header: React.FC = () => {
  const initialSearchValues: HeaderSearchValues = {
    location: '',
    dates: ['', ''],
    people: '',
  };

  const [searchValues, setSearchValues] =
    useState<HeaderSearchValues>(initialSearchValues);

  const [showMobileSearchBar, toggleMobileSearchBar] = useToggle();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setSearchValues((prevSearchValues) => ({
      ...prevSearchValues,
      [name]: value,
    }));
  };

  const handleDatePickerChange = (dateObject: DateObject[]) => {
    setSearchValues((prevValues) => ({
      ...prevValues,
      dates: [dateObject[0]?.toString(), dateObject[1]?.toString()],
    }));
  };

  const handleSearch = () => {
    console.log(searchValues);
  };

  const clearAllSearchValues = () => {
    setSearchValues(initialSearchValues);
  };

  return (
    <header>
      {/* BANNER */}
      <div className='bg-primary flex items-center justify-center gap-4 pt-2 pb-3 text-white px-21 md:px-10 lg:px-60'>
        <Icons.bag className='size-10 md:size-5' />

        <p className='font-semibold text-xs md:text-base lg:text-xl'>
          Overseas trip? Get the latest information on travel guides
        </p>

        <Button className='rounded-50 text-xs md:text-sm bg-secondary-100 px-3 py-[0.375rem] capitalize'>
          more info
        </Button>
      </div>

      <div className='flex justify-between items-center border-b border-grey-500 py-4 px-21 md:px-10 lg:px-60 gap-4'>
        <Link href={'/'} className='hidden md:inline-block'>
          <Icons.logo />
        </Link>

        {/* MOBILE SEARCHBAR */}

        <Button
          aria-label='search'
          className='border border-grey-300 rounded-[60px] flex items-center justify-start py-2 w-full px-4 md:hidden relative overflow-hidden'
          onClick={toggleMobileSearchBar}
        >
          <div className='text-left space-y-1'>
            <span className='block text-sm'>Where to</span>

            <ul className='flex list-inside justify-start items-center gap-2 text-grey-100 text-xs'>
              <li className=''>Location</li>
              <li className='size-1 bg-grey-100'></li>
              <li className=''>Date</li>
              <li className='size-1 bg-grey-100'></li>

              <li>Add guest</li>
            </ul>
          </div>
          <Search className='size-fit p-2  bg-secondary-900 rounded-[50px] text-white absolute top-1/2 -translate-y-1/2 right-1' />
        </Button>

        {/* Desktop Searchbar */}
        <div className='border border-grey-300 rounded-[60px] md:flex py-2 px-3 gap-5 hidden relative'>
          <SearchInput
            label='Location'
            id='location'
            placeholder='Search for destination'
            value={searchValues.location}
            onChange={handleSearchChange}
            wrapperStyles='border-r border-grey-200 w-3/4'
          />

          <div className=''>
            <DatePicker
              value={searchValues.dates}
              onChange={(dateObj) => {
                handleDatePickerChange(dateObj);
              }}
              range
              render={(value, openCalendar) => {
                const values = value.split('~');

                const from = values[0] || '';
                return (
                  <Button
                    onClick={openCalendar}
                    className='flex-col border-r pr-5'
                  >
                    <span className='text-secondary-100'>Check in</span>
                    <span className='text-grey-100'>
                      {value
                        ? `${formatDate(from, {
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

          <div className=''>
            <DatePicker
              value={searchValues.dates}
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
                    className='flex-col border-r pr-5'
                  >
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
          <SearchInput
            label='People'
            id='people'
            placeholder='Add guest'
            value={searchValues.people}
            onChange={handleSearchChange}
            wrapperStyles='w-2/4'
          />
          <Button
            aria-label='search'
            className='size-fit p-2  bg-secondary-900 rounded-[50px] text-white absolute top-1/2 -translate-y-1/2 right-2'
          >
            <Search />
          </Button>
        </div>
        <UserProfileLink />
      </div>

      {showMobileSearchBar && (
        <MobileSearchBar
          closeModal={toggleMobileSearchBar}
          searchValues={searchValues}
          handleChange={handleSearchChange}
          handleDatePickerChange={handleDatePickerChange}
          handleSearch={handleSearch}
          clearAllSearchValues={clearAllSearchValues}
        />
      )}
    </header>
  );
};

export default Header;
