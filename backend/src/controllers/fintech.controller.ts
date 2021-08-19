
import { Request , Response } from 'express';


class FintechController {

   
    public async get (req: Request, res: Response): Promise<Response> {

        return res.status(200).json("JUAN se la come")

    }


}

export const fintechController = new FintechController();


