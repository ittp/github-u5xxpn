import type { NextApiRequest, NextApiResponse } from 'next';
import type { Router } from '../../interfaces';

// Fake users data
const routers: Router[] = [
  {
    id: 1,
    ip: '109.188.130.219',
    hostname: 'S1',
    address: '1-я Советская улица, 10',
    // services: []
  },
  { id: 2, ip: '2' },
  { id: 3, ip: '3' },
];

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Router[]>
) {
  // Get data from your database

  res.status(200).json(routers);
}
