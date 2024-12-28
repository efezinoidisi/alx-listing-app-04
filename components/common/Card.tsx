import { CardProps } from '@/interfaces';
import { formatCurrency } from '@/utils/utils';
import Image from 'next/image';
import Icons from './Icons';
import Rating from './Rating';

const Card: React.FC<CardProps> = ({
  name,
  address,
  discount,
  price,
  image,
  rating,
  category,
  offers,
}) => {
  return (
    <div className='space-y-[1.085rem] z-0'>
      <div className='relative overflow-visible'>
        {discount ? (
          <div className='absolute top-[15.57px] bg-primary  text-white flex items-center gap-2 -left-2 py-2 px-3 rounded-r-70 rounded-tl-60 after:content-[""] after:absolute after:size-4 after:bg-[#0D785B] after:-bottom-2 after:left-[3.52px] after:-z-[1] after:rotate-45'>
            <Icons.subtract />
            <span>{`${discount}% Off`}</span>
          </div>
        ) : null}
        <Image
          src={image}
          alt={name}
          width={379}
          height={255}
          className='rounded-2xl bg-grey-600 w-full z-0'
        />
      </div>
      <div className='flex items-center gap-5 text-xs font-medium overflow-hidden'>
        {category?.map((item) => (
          <span key={item} className='truncate'>
            {item}
          </span>
        ))}
      </div>
      <div className='space-y-[0.1625rem]'>
        <div className='flex justify-between items-center overflow-hidden gap-3'>
          <h3 className='font-semibold text-lg md:text-xl truncate'>{name}</h3>
          <Rating rating={rating} />
        </div>
        <p className='font-medium text-[1.0625rem] truncate'>{`${address.city}${
          address.country && ', ' + address.country
        }`}</p>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2 border w-fit border-grey-200 rounded-[26.05px] py-2 px-4'>
          <div className='flex items-center gap-2'>
            <Icons.bed className='size-[19.76px]' />
            <span className='font-medium text-xs'>{offers.bed}</span>
          </div>
          <div className='flex items-center gap-2'>
            <Icons.shower className='size-[19.76px]' />
            <span className='font-medium text-xs'>{offers.shower}</span>
          </div>
          <div className='flex items-center gap-2 text-nowrap'>
            <Icons.people className='size-[19.76px]' />
            <span className='font-medium text-xs'>{offers.occupants}</span>
          </div>
        </div>

        <p className='font-semibold text-[1.375rem]'>
          <span className=''>{formatCurrency(price)}</span>
          <sub>/n</sub>
        </p>
      </div>
    </div>
  );
};

export default Card;
