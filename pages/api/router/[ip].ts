import type { NextApiRequest, NextApiResponse } from 'next';
import type { User } from '../../../interfaces';

export default function userHandler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  const { query, method } = req;
  // const id = parseInt(query.ip as string, 10);
  const name = query.name as string;
  const ip = query.ip as string;

  switch (method) {
    case 'GET':
      // Get data from your database
      res.status(200).json({ pi, name: `Router ${ip}` });
      break;
    case 'PUT':
      // Update or create data in your database
      res.status(200).json({ ip, name: name || `Router ${ip}` });
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
