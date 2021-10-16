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
        this.router.post('/account/:userId', fintechController.createAccount);
        this.router.get('/account/:userId', fintechController.getAccount);
        // this.router.delete('/account', fintechController.deleteAccount);
        this.router.post('/transfer', fintechController.createTransfer);
        this.router.get('/transfer/:cvu', fintechController.getTransfer);
    }
}

const fintechRoutes = new FintechRoutes();
export default fintechRoutes.router;

