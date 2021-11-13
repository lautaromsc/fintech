import { Router } from 'express'

import { shipiFiController } from '../controllers/shipiFi.controller'

class ShipiFiRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {

        this.router.get('/', shipiFiController.get);
        this.router.get('/obtenerEstadoPago', shipiFiController.obtenerEstadoPago);
        this.router.post('/informarPago', shipiFiController.informarPago);

    }
} 
    const shipiFiRoutes = new ShipiFiRoutes();
    export default shipiFiRoutes.router;

