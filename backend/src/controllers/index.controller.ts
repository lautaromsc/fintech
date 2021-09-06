
import { Request , Response } from 'express';
import path from 'path'

class IndexController {

    public index (req: Request, res: Response){
        res.json({text:  'I`m alive, the API is /api/fintech'})
        // res.sendFile(path.join(__dirname, 'I`m alive, the API is /api/fintech'))
    }

}

export const indexController = new IndexController();