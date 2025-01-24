import { CardProps } from '@/interfaces';
import { formatCurrency } from '@/utils/utils';
import Image from 'next/image';
import Link from 'next/link';
import Icons from './Icons';
import Offers from './Offers';
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
    <Link href={`/property/${name}`} className=''>
      <div className='space-y-[1.085rem] z-0 grid'>
        <div className='relative'>
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
        <div className='flex items-center gap-2 md:gap-5 text-xs font-medium overflow-x-auto'>
          {category?.map((item) => (
            <span key={item} className=''>
              {item}
            </span>
          ))}
        </div>
        <div className='space-y-[0.1625rem]'>
          <div className='grid grid-cols-[1fr_auto] overflow-hidden gap-1 md:gap-3'>
            <h3 className='font-semibold text-lg md:text-xl truncate'>
              {name}
            </h3>
            <Rating rating={rating} />
          </div>
          <p className='font-medium text-sm md:text-[1.0625rem] truncate'>{`${
            address.city
          }${address.country && ', ' + address.country}`}</p>
        </div>
        <div className='flex items-center justify-between'>
          <Offers offers={offers} />

          <p className='font-semibold text-sm md:text-[1.375rem]'>
            <span className=''>{formatCurrency(price)}</span>
            <sub>/n</sub>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
