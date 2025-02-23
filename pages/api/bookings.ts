import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const body = req.body;

    console.log(body);

    res.status(200).json({ message: 'Booking Confirmed!' });
  } else {
    res.status(400).json({ error: 'Only POST requests allowed' });
  }
}
