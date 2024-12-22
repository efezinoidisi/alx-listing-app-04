import { ACCOMMODATION_TYPES } from '@/constants';
import { cn } from '@/utils/utils';
import { Search } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import Button from '../common/Button';
import Pill from '../common/Pill';

interface SearchValues {
  location: string;
  checkIn: string;
  checkOut: string;
  people: string;
}

const Header: React.FC = () => {
  const [searchValues, setSearchValues] = useState<SearchValues>({
    location: '',
    checkIn: '',
    checkOut: '',
    people: '',
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setSearchValues((prevSearchValues) => ({
      ...prevSearchValues,
      [name]: value,
    }));
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(searchValues);
  };

  return (
    <header>
      <div className='flex justify-between items-center border-b border-grey-500 py-4 px-12'>
        <Link href={'/'} className=''>
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

        <form
          className='border border-grey-300 rounded-[60px] flex py-2 px-3 gap-5'
          onSubmit={handleSearchSubmit}
        >
          <SearchInput
            label='Location'
            id='location'
            placeholder='Search for destination'
            value={searchValues.location}
            onChange={handleSearchChange}
            wrapperStyles='border-r border-grey-200 w-3/4'
          />

          <SearchInput
            label='Check in'
            id='checkIn'
            placeholder='Add date'
            value={searchValues.checkIn}
            onChange={handleSearchChange}
            wrapperStyles='border-r border-grey-200 w-1/4'
          />
          <SearchInput
            label='Check out'
            id='checkOut'
            placeholder='Add date'
            value={searchValues.checkOut}
            onChange={handleSearchChange}
            wrapperStyles='border-r border-grey-200 w-1/4'
          />
          <SearchInput
            label='People'
            id='people'
            placeholder='Add guest'
            value={searchValues.people}
            onChange={handleSearchChange}
            wrapperStyles='w-1/4'
          />
          <Button
            aria-label='search'
            className='size-fit p-2  bg-secondary-900 rounded-[50px] text-white'
          >
            <Search />
          </Button>
        </form>

        <div className='flex items-center gap-2'>
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

      {/* Filter Section */}

      <div className='flex gap-12 overflow-x-auto w-full text-[#616161] px-12'>
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
    </header>
  );
};

const SearchInput: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    wrapperStyles?: string;
  }
> = ({ label, id, wrapperStyles, ...otherProps }) => {
  return (
    <label className={cn('flex flex-col gap-[6px]  w-full', wrapperStyles)}>
      <span className='font-medium  text-secondary-100'>{label}</span>
      <input
        type='text'
        id={id}
        name={id}
        className='placeholder:text-grey-100  text-[0.82rem] bg-transparent border-none w-full outline-none'
        {...otherProps}
      />
    </label>
  );
};

export default Header;
