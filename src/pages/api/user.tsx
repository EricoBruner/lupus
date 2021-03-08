import { NextApiRequest, NextApiResponse } from 'next';
import connect from '../../utils/database';

export default async ( request: NextApiRequest, response: NextApiResponse ) => {

    if (request.method === 'POST') {

        const { db } = await connect();
        const res = await db.collection('users').insertOne({
            name: "Erico",
            age: 22,
        });

        return response.status(200).json(res.ops[0]);

    } else {

        return response.status(400).json({ message: 'Wrong request method'})
    }
}
