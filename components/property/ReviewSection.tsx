import { Review } from '@/interfaces';
import { format, formatDistance } from 'date-fns';
import Image from 'next/image';
import Rating from '../common/Rating';

const ReviewSection: React.FC<{ reviews: Review[]; rating: number }> = ({
  reviews,
  rating,
}) => {
  return (
    <section className=''>
      <h3 className='text-2xl font-semibold sr-only'>Reviews</h3>
      <div className='flex items-center gap-2 text-xs md:text-lg lg:text-22 text-nowrap mb-8'>
        <Rating rating={rating} />

        <span className='text-[#929292]'>{`(${reviews.length} reviews)`}</span>
      </div>
      <div className='grid md:grid-cols-2 md:w-fit  gap-y-10 gap-x-5'>
        {reviews.map((review, index) => {
          const timeAgo = formatDistance(
            new Date(),
            new Date(review.dateJoined)
          );

          const datePosted = format(new Date(review.createdAt), 'MMMM yyyy');
          return (
            <div key={index} className='pb-4 mb-4 max-w-[250.14px]'>
              <div className='flex items-center'>
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={48}
                  height={48}
                  className='size-12 rounded-full mr-4'
                />
                <div className=''>
                  <p className='font-bold'>{review.name}</p>
                  <p className='text-[#6C6C6C] font-medium text-sm'>{`${timeAgo} on ALX`}</p>
                </div>
              </div>

              <div className='flex items-center gap-2 mt-3 mb-2 text-xs'>
                <p className='font-semibold '>{datePosted}</p>
                <span className='size-1 rounded-full bg-[#6C6C6C]'></span>

                <p className='text-[#6C6C6C] font-medium'>{review.tag}</p>
              </div>
              <p>{review.comment}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ReviewSection;
