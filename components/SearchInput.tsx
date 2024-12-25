import { cn } from '@/utils/utils';

const SearchInput: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    wrapperStyles?: string;
    labelStyles?: string;
  }
> = ({ label, id, wrapperStyles = '', labelStyles = '', ...otherProps }) => {
  return (
    <label className={cn('flex flex-col gap-[6px]  w-full', wrapperStyles)}>
      <span className={cn('font-medium  text-secondary-100', labelStyles)}>
        {label}
      </span>
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

export default SearchInput;
