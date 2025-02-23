import { PropertyProps } from '@/interfaces';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function useFetchListing() {
  const [isLoading, setIsLoading] = useState(false);

  const [listings, setListings] = useState<PropertyProps[]>([]);
  useEffect(() => {
    const fetchListings = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get('/api/properties/listing');
        if (res.status === 200) {
          setListings(res.data.listings);
        } else {
          toast.error('Failed to fetch listings');
        }
      } catch (error) {
        console.log(error);

        toast.error('An unknown error has occured, please try again');
      } finally {
        setIsLoading(false);
      }
    };

    fetchListings();
  }, []);

  return { isLoading, listings };
}
