
import { Request , Response } from 'express';
import path from 'path'

class IndexController {

    public index (req: Request, res: Response){
        //res.json({text: 'the API is /api/users'})
        res.sendFile(path.join(__dirname, 'Estoy vivo!'))
    }

}

export const indexController = new IndexController();