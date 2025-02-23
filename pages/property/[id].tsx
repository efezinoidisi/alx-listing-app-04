import Loader from '@/components/common/Loader';
import PropertyDetail from '@/components/property/PropertyDetail';
import ReviewSection from '@/components/property/ReviewSection';
import { PropertyProps } from '@/interfaces';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const [isLoading, setIsLoading] = useState(false);

  const [property, setProperty] = useState<PropertyProps>();

  useEffect(() => {
    const fetchProperty = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`/api/properties/${id}`);
        if (res.status === 200) {
          setProperty(res.data.property);
        } else {
          toast.error('Failed to fetch property');
        }
      } catch (error) {
        console.log(error);

        toast.error('An unknown error has occured, please try again');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (!property) return <p>Property not found</p>;

  const goBack = () => {
    router.back();
  };

  return (
    <div>
      {isLoading ? (
        <Loader text='loading property' />
      ) : (
        <>
          <PropertyDetail property={property} goBack={goBack} />

          {/* REVIEWS SECTION */}
          <div
            className='border-y border-[#E6E6E6] py-14 mt-8 px-21 md:px-10 lg:px-60'
            id='Reviews'
          >
            {property.reviews.length ? (
              <ReviewSection
                propertyId={id as string}
                rating={property.rating}
              />
            ) : (
              <p>No reviews yet</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
