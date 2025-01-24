import PropertyDetail from '@/components/property/PropertyDetail';
import ReviewSection from '@/components/property/ReviewSection';
import { PROPERTYLISTINGSAMPLE } from '@/constants/index';
import { useRouter } from 'next/router';

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property) return <p>Property not found</p>;

  const goBack = () => {
    router.back();
  };

  return (
    <div>
      <PropertyDetail property={property} goBack={goBack} />

      {/* REVIEWS SECTION */}
      <div
        className='border-y border-[#E6E6E6] py-14 mt-8 px-21 md:px-10 lg:px-60'
        id='Reviews'
      >
        {property.reviews.length ? (
          <ReviewSection reviews={property.reviews} rating={property.rating} />
        ) : (
          <p>No reviews yet</p>
        )}
      </div>
    </div>
  );
}
