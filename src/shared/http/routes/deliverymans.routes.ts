import { Router } from 'express';

import { 
    CreateDeliverymanController 
} from '../../../modules/deliverymans/useCases/createDeliveryman/CreateDeliverymanController';

import { 
    AuthenticateDeliverymanController
} from '../../../modules/accounts/authenticateDeliveryman/AuthenticateDeliverymanController';

import {
    GetDeliveriesController
} from '../../../modules/deliverymans/useCases/getDeliveries/GetDeliveriesController';

import { ensureDeliverymanAuthenticated } from '../middlewares/ensureDeliverymanAuthenticated';

const deliverymansRoutes = Router();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const getDeliveriesController = new GetDeliveriesController();

deliverymansRoutes.post('/', createDeliverymanController.handle);
deliverymansRoutes.post('/login', authenticateDeliverymanController.handle);

deliverymansRoutes.get(
    '/deliveries',
    ensureDeliverymanAuthenticated,
    getDeliveriesController.handle
);

export { deliverymansRoutes };
