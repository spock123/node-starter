
import { Request, Response } from 'express';

export const test1Endpoint = async (req: Request, res: Response): Promise<void> => {
    try {
        res.send('Test1 is working');
    }
    catch(err) {
        console.log(err);
        res.status(400).send(err);
    }
}