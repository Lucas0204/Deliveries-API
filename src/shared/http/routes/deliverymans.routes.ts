import { Router } from 'express';

import { 
    CreateDeliverymanController 
} from '../../../modules/deliverymans/useCases/createDeliveryman/CreateDeliverymanController';

import { 
    AuthenticateDeliverymanController
} from '../../../modules/accounts/authenticateDeliveryman/AuthenticateDeliverymanController';

const deliverymansRoutes = Router();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

deliverymansRoutes.post('/', createDeliverymanController.handle);
deliverymansRoutes.post('/login', authenticateDeliverymanController.handle);

export { deliverymansRoutes };
