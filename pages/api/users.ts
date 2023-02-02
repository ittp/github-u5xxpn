import type { NextApiRequest, NextApiResponse } from 'next';
import type { User, Router } from '../../interfaces';

// Fake users data
const users: User[] = [{ id: 1 }, { id: 2 }, { id: 3 }];
const routers: Router[] = [
  { id: 1, ip: '1' },
  { id: 2, ip: '2' },
  { id: 3, ip: '3' },
];

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  // Get data from your database
  res.status(200).json(routers);
}
