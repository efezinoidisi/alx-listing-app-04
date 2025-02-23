import { PROPERTYLISTINGSAMPLE } from '@/constants';
import { PropertyProps } from '@/interfaces';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  listings: PropertyProps[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    listings: PROPERTYLISTINGSAMPLE,
  });
}
