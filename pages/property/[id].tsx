import PropertyDetail from '@/components/property/PropertyDetail';
import { PROPERTYLISTINGSAMPLE } from '@/constants/index';
import { useRouter } from 'next/router';

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property) return <p>Property not found</p>;

  return (
    <div>
      <PropertyDetail property={property} />
    </div>
  );
}
