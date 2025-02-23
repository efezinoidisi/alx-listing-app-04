import { PROPERTYLISTINGSAMPLE } from '@/constants';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const propertyIndex = PROPERTYLISTINGSAMPLE.findIndex(
    (item) => item.name === id
  );

  if (propertyIndex < 0) {
    res.status(400).json({ error: `Property with ${id} not found` });
  }

  res
    .status(200)
    .json({ reviews: PROPERTYLISTINGSAMPLE[propertyIndex].reviews });
}
