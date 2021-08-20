import { Router } from 'express'

import { fintechController } from '../controllers/fintech.controller'

class FintechRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', fintechController.get);
        this.router.get('/:numero', fintechController.getIsoMap);
    }
}

const fintechRoutes = new FintechRoutes();
export default fintechRoutes.router;

