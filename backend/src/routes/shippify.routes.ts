import { Router } from 'express'

import { shippifyController } from '../controllers/shippify.controller'

class ShippifyRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {

        this.router.get('/', shippifyController.get);
        this.router.get('/obtenerEstadoPago', shippifyController.obtenerEstadoPago);
        this.router.post('/informarPago', shippifyController.informarPago);
        this.router.get('/tracking', shippifyController.tracking);

    }
} 
    const shipiFiRoutes = new ShippifyRoutes();
    export default shipiFiRoutes.router;

