import type { NextApiRequest, NextApiResponse } from 'next';
import { getResources } from 'lib/cloudinary'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const images = await getResources();
  return res.status(200).json(
    {
      images
    }
  )
}
