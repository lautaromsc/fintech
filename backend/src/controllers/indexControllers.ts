import  { Request, Response } from 'express';

class IndexController {

    public index(req: Request, res: Response) {
        res.json({text: 'The is /api/games'})
    } 
}

export const indexController = new IndexController();
