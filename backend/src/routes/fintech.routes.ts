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
        this.router.post('/login', fintechController.login);
        this.router.post('/verify', fintechController.verify);
        this.router.post('/register', fintechController.register);
    }
}

const fintechRoutes = new FintechRoutes();
export default fintechRoutes.router;

