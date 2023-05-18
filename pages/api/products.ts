// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "@/lib/prisma";

import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req : NextApiRequest, res : NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const data = await prisma.product.findMany({});
      console.log("--- GET PRODUCTS");
      return res.status(200).json({ data });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: 'Something went wrong' });
    }
  } else {
    return res.status(405).json({ msg: 'Method not allowed' });
  }
}
