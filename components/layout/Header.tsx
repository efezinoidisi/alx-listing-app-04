import { ACCOMMODATION_TYPES } from '@/constants';
import { HeaderSearchValues } from '@/interfaces';
import useToggle from '@/utils/hooks/use-toggle';
import { cn, formatDate } from '@/utils/utils';
import { Search } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import Button from '../common/Button';
import Pill from '../common/Pill';
import MobileSearchBar from '../MobileSearchBar';
import SearchInput from '../SearchInput';

const Header: React.FC = () => {
  const initialSearchValues: HeaderSearchValues = {
    location: '',
    dates: ['', ''],
    people: '',
  };

  const [searchValues, setSearchValues] =
    useState<HeaderSearchValues>(initialSearchValues);

  console.log(searchValues);

  const [isProfileDropdownVisibile, toggleIsProfileDropdownVisible] =
    useToggle();

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

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleSearch();
  };

  const clearAllSearchValues = () => {
    setSearchValues(initialSearchValues);
  };

  return (
    <header>
      {/* BANNER */}
      <div className='bg-primary flex items-center justify-center gap-4 pt-2 pb-3 text-white px-21 md:px-10 lg:px-60'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M14 6H10C8.64413 6 7.53199 6 6.60915 6.05445C4.96519 6.15144 3.92193 6.42122 3.17157 7.17157C2 8.34315 2 10.2288 2 14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14C22 10.2288 22 8.34315 20.8284 7.17157C20.0781 6.42122 19.0348 6.15144 17.3909 6.05445C16.468 6 15.3559 6 14 6Z'
            stroke='white'
            strokeWidth='1.5'
          />
          <path
            d='M6.60938 6.05445C7.43282 6.03358 8.15925 5.45491 8.43944 4.68032C8.44806 4.65649 8.4569 4.62999 8.47457 4.57697L8.50023 4.5C8.54241 4.37344 8.56351 4.31014 8.58608 4.254C8.87427 3.53712 9.54961 3.05037 10.3208 3.00366C10.3812 3 10.4479 3 10.5814 3H13.4191C13.5525 3 13.6192 3 13.6796 3.00366C14.4508 3.05037 15.1262 3.53712 15.4144 4.254C15.4369 4.31014 15.458 4.37343 15.5002 4.5L15.5259 4.57697C15.5435 4.62992 15.5524 4.65651 15.561 4.68032C15.8412 5.45491 16.5676 6.03358 17.3911 6.05445'
            stroke='white'
            strokeWidth='1.5'
          />
          <path
            d='M21.6618 8.71973C18.6519 10.6761 17.147 11.6543 15.5605 12.1472C13.2416 12.8677 10.7586 12.8677 8.43963 12.1472C6.85313 11.6543 5.34822 10.6761 2.33838 8.71973'
            stroke='white'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
          <path
            d='M8 11V13'
            stroke='white'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
          <path
            d='M16 11V13'
            stroke='white'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
        </svg>

        <p className='font-semibold text-xs md:text-base lg:text-xl'>
          Overseas trip? Get the latest information on travel guides
        </p>

        <Button className='rounded-50 text-sm bg-secondary-100 px-3 py-[0.375rem] capitalize'>
          more info
        </Button>
      </div>

      <div className='flex justify-between items-center border-b border-grey-500 py-4 px-21 md:px-10 lg:px-60'>
        <Link href={'/'} className='hidden md:inline-block'>
          <svg
            width='60'
            height='32'
            viewBox='0 0 60 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M22.191 20.7395C22.191 26.7167 17.3455 31.5622 11.3683 31.5622C5.39112 31.5622 0.545654 26.7167 0.545654 20.7395C0.545654 14.7624 5.39112 9.91689 11.3683 9.91689C17.3455 9.91689 22.191 14.7624 22.191 20.7395ZM7.66264 20.7395C7.66264 22.7861 9.32172 24.4452 11.3683 24.4452C13.4149 24.4452 15.074 22.7861 15.074 20.7395C15.074 18.693 13.4149 17.0339 11.3683 17.0339C9.32172 17.0339 7.66264 18.693 7.66264 20.7395Z'
              fill='#262626'
            />
            <path
              d='M15.4735 9.91689H22.9374V31.5622H15.4735V9.91689Z'
              fill='#262626'
            />
            <path
              d='M26.6693 4.69216L34.1332 0.960205V31.5622H26.6693V4.69216Z'
              fill='#262626'
            />
            <path
              d='M53.8773 5.42319C54.1744 5.13749 54.6469 5.14679 54.9326 5.44394L59.071 9.74837C59.3567 10.0455 59.3474 10.518 59.0503 10.8037L42.4667 26.7476C42.1696 27.0333 41.6971 27.024 41.4114 26.7268L37.273 22.4224C36.9873 22.1252 36.9966 21.6527 37.2937 21.367L53.8773 5.42319Z'
              fill='#262626'
            />
            <path
              d='M58.9383 21.5916C59.2294 21.8834 59.2289 22.356 58.9371 22.6471L54.7103 26.8648C54.4185 27.1559 53.9459 27.1554 53.6548 26.8636L37.4056 10.5792C37.1144 10.2874 37.1149 9.8148 37.4067 9.52363L41.6335 5.30599C41.9253 5.01482 42.3979 5.01533 42.6891 5.30713L58.9383 21.5916Z'
              fill='#262626'
            />
          </svg>
        </Link>

        {/* MOBILE SEARCHBAR */}

        <Button
          aria-label='search'
          className='border border-grey-300 rounded-[60px] flex items-center justify-start py-2 w-full px-4 md:hidden relative'
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

                console.log(to);

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

        <div className='relative'>
          <Button aria-label='view profile' className='ml-5 md:hidden'>
            <svg
              width='46'
              height='46'
              viewBox='0 0 46 46'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className=''
            >
              <g clip-path='url(#clip0_84_290)'>
                <rect width='46' height='46' rx='23' fill='#34967C' />
                <g clip-path='url(#clip1_84_290)'>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M22.8063 25.6118C27.3398 25.6118 31.0288 21.9228 31.0288 17.3875C31.0288 12.853 27.3398 9.16406 22.8063 9.16406C18.2728 9.16406 14.5802 12.853 14.5802 17.3875C14.5793 21.9228 18.2728 25.6118 22.8063 25.6118ZM23.0004 1.88672C34.6405 1.88672 44.1136 11.358 44.1136 23C44.1136 28.5173 41.9843 33.5459 38.5065 37.3112C37.2559 34.3751 35.2281 31.8478 32.6082 29.9701C29.727 27.9082 26.3381 26.7896 22.8099 26.7366C22.8054 26.7357 22.8018 26.7357 22.7973 26.7366C19.324 26.7887 15.9818 27.8758 13.1301 29.8793C10.5399 31.6996 8.51216 34.1577 7.22739 37.0201C3.90677 33.2889 1.88708 28.3762 1.88708 23C1.88708 11.358 11.3602 1.88672 23.0004 1.88672ZM38.5658 7.43547C42.7238 11.5934 45.013 17.1206 45.013 23C45.013 28.8794 42.7229 34.4075 38.5658 38.5645C34.4087 42.7225 28.8815 45.0117 23.0004 45.0117C17.1228 45.0117 11.592 42.7225 7.43493 38.5645C3.27696 34.4075 0.986847 28.8794 0.986847 23C0.986847 17.1206 3.27696 11.5934 7.43403 7.43547C11.592 3.2784 17.1228 0.988281 23.0004 0.988281C28.8815 0.988281 34.4087 3.2784 38.5658 7.43547Z'
                    fill='white'
                  />
                </g>
              </g>
              <defs>
                <clipPath id='clip0_84_290'>
                  <rect width='46' height='46' rx='23' fill='white' />
                </clipPath>
                <clipPath id='clip1_84_290'>
                  <rect width='46' height='46' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </Button>

          <div
            className={cn(
              'items-center gap-2 hidden',
              isProfileDropdownVisibile ? 'absolute flex flex-col' : 'lg:flex'
            )}
          >
            <Link
              href={''}
              className='bg-primary text-white rounded-70 py-3 px-5'
            >
              Sign in
            </Link>

            <Link
              href={''}
              className='border border-grey-400 rounded-70 py-3 px-5'
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>

      {/* Filter Section */}

      <div className='flex gap-12 overflow-x-auto w-full text-[#616161] px-21 md:px-10 lg:px-60 '>
        {ACCOMMODATION_TYPES.map((accommodationType) => {
          return (
            <Pill
              key={accommodationType.name}
              pill={accommodationType}
              handleClick={() => {}}
            />
          );
        })}
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
