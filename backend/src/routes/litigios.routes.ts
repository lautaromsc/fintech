import { Router } from 'express'

import { litigioController } from './../controllers/litigio.controller'

class LitigiosRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', litigioController.get);
        this.router.get('/:id', litigioController.getOne)
        this.router.post('/', litigioController.post)
        this.router.put('/:id', litigioController.put)
        this.router.delete('/:id', litigioController.delete)
    }
}

const litigiosRoutes = new LitigiosRoutes();
export default litigiosRoutes.router;

