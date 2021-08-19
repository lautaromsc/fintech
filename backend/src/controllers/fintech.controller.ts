
import { Request , Response } from 'express';


class FintechController {

   
    public async get (req: Request, res: Response): Promise<Response> {

    

        try {

            return res.status(200).json(`JUAN SE LA COME`)
           
        } catch (error) {
            console.log(error)
            return res.status(500).json("Internal Server Error")
        }

    }


}

export const fintechController = new FintechController();


