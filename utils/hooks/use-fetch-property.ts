import { PropertyProps } from '@/interfaces';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function useFetchProperty({ id }: { id: string }) {
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

  return { isLoading, property };
}
