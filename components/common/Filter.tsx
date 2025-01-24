import { FILTERS } from '@/constants';
import useToggle from '@/utils/hooks/use-toggle';
import { cn } from '@/utils/utils';
import { ChevronDown } from 'lucide-react';
import React from 'react';
import Button from './Button';
import Pill from './Pill';

const Filter: React.FC<{
  currentFilter: string;
  changeCurrentFilter: (value: string) => void;
}> = ({ currentFilter, changeCurrentFilter }) => {
  const [showDropdown, toggleDropdown] = useToggle();

  return (
    <>
      <div className='flex items-center gap-[0.68rem] md:gap-4 overflow-auto md:hidden xl:flex'>
        {FILTERS.map((filter) => {
          const isActiveFilter = currentFilter === filter;
          return (
            <Pill
              key={filter}
              name={filter}
              handleClick={() => changeCurrentFilter(filter)}
              className={cn(
                'border py-2 md:py-[10px] px-4 md:px-6 rounded-[30px] border-grey-200 font-semibold xl:text-lg 2xl:text-[1.1875rem]',
                isActiveFilter && 'border-primary bg-[#F0FFFB]'
              )}
            />
          );
        })}
      </div>

      <div className='hidden md:flex xl:hidden items-center gap-4 relative'>
        {FILTERS.slice(0, 3).map((filter) => {
          const isActiveFilter = currentFilter === filter;
          return (
            <Pill
              key={filter}
              name={filter}
              handleClick={() => changeCurrentFilter(filter)}
              className={cn(
                'border py-[10px] px-6 rounded-[30px] border-grey-200 font-semibold xl:text-lg 2xl:text-[1.1875rem]',
                isActiveFilter && 'border-primary bg-[#F0FFFB]'
              )}
            />
          );
        })}

        <Button
          className={cn(
            'border border-grey-200 rounded-full p-2 justify-center',
            showDropdown && 'border-primary/50 text-primary/50'
          )}
          onClick={toggleDropdown}
        >
          <ChevronDown
            className={cn(
              'transition-transform duration-300',
              showDropdown && 'rotate-180'
            )}
          />
        </Button>

        {showDropdown && (
          <div className='flex flex-col gap-4 bg-background absolute right-0 z-20 py-5 top-full mt-4 rounded-30 px-4 shadow-md border border-grey-300'>
            {FILTERS.slice(3).map((filter) => {
              const isActiveFilter = currentFilter === filter;
              return (
                <Pill
                  key={filter}
                  name={filter}
                  handleClick={() => changeCurrentFilter(filter)}
                  className={cn(
                    'border py-[10px] px-6 rounded-[30px] border-grey-200 font-semibold xl:text-lg 2xl:text-[1.1875rem]',
                    isActiveFilter && 'border-primary bg-[#F0FFFB]'
                  )}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Filter;
