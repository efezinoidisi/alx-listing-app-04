import AccomodationTypes from '@/components/common/AccomodationTypes';
import Button from '@/components/common/Button';
import Dropdown from '@/components/common/Dropdown';
import Filter from '@/components/common/Filter';
import Icons from '@/components/common/Icons';
import Loader from '@/components/common/Loader';
import Listing from '@/components/property/Listing';
import { FILTERS } from '@/constants';
import useFetchListing from '@/utils/hooks/use-fetch-listings';
import { useState } from 'react';

export default function Home() {
  const [currentFilter, setCurrentFilter] = useState(FILTERS[0]);

  const changeCurrentFilter = (value: string) => {
    setCurrentFilter(value);
  };

  const { listings, isLoading } = useFetchListing();

  const sortOptions = ['highest price', 'lowest price'];

  const [sortValue, setSortValue] = useState(sortOptions[0]);

  const handleSortValueChange = (value: string) => {
    setSortValue(value);
  };

  return (
    <>
      <AccomodationTypes />
      <main className='px-21 md:px-10 lg:px-60'>
        {/* FILTERS MOBILE */}
        <div className='mt-12 mb-9 md:hidden flex items-center flex-row-reverse gap-[0.8125rem]'>
          <Filter
            changeCurrentFilter={changeCurrentFilter}
            currentFilter={currentFilter}
          />
          <Button className='border border-grey-200 rounded-30 p-2 xl:px-6 justify-center'>
            <Icons.filter className='' />
          </Button>
        </div>
        <div className='mt-9 bg-hero bg-cover h-[45vh] bg-[center_60%] bg-no-repeat w-full rounded-[11.13px] md:rounded-[27px] text-white flex flex-col justify-center items-center px-5 gap-2 md:gap-5'>
          <h1 className='[text-shadow:_0_1.2px_5.72px_rgba(0_0_0_/_0.251)] font-source-sans font-semibold text-2xl text-center md:text-[3rem] md:leading-[60px] lg:text-[4.2rem] lg:leading-[72px] xl:text-[5.875rem] xl:leading-[99px]'>
            Find your favorite place here!
          </h1>
          <p className='text-center text-xs md:text-base lg:text-[1.125rem] xl:text-2xl [text-shadow:_0_4px_7px_rgba(0_0_0_/_0.251)]'>
            The best prices for over 2 million properties worldwide.
          </p>
        </div>

        {/* FILTERS */}
        <div className='hidden mt-12 mb-9 md:flex w-full justify-between gap-4'>
          <Filter
            changeCurrentFilter={changeCurrentFilter}
            currentFilter={currentFilter}
          />
          <div className='flex items-center gap-4'>
            <Button className='border border-grey-200 rounded-30 p-2  xl:px-6 justify-center'>
              <span className='hidden xl:block font-semibold text-lg'>
                Filter
              </span>
              <Icons.filter className='' />
            </Button>
            <Dropdown
              value={sortValue}
              options={sortOptions}
              handleChange={handleSortValueChange}
              title='Sort by:'
              titleStyles='text-[#8C8C8C]'
              titleWrapperStyles='font-semibold text-sm xl:text-lg border border-grey-200 rounded-30 p-2  xl:px-6 justify-center'
              className='hidden md:block'
            />
          </div>
        </div>
        {isLoading ? (
          <Loader text='loading listing' />
        ) : (
          <Listing listing={listings} sortValue={sortValue} />
        )}
      </main>
    </>
  );
}
