import axios from "axios";
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { data } = await axios.get('http://localhost:5000/', {
            withCredentials: true
        });

      return  res.status(200).json(data);
    } catch (error) {
        return  res.status(500).json({ error: "Failed to fetch data from the server" });
    }
}
