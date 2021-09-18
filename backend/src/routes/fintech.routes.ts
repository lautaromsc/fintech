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
        this.router.get('/login', fintechController.login);
        this.router.get('/verify', fintechController.verify);
    }
}

const fintechRoutes = new FintechRoutes();
export default fintechRoutes.router;

