import { Router } from 'express';

import { CreateDeliverymanController } from '../../../modules/deliverymans/useCases/createDeliveryman/CreateDeliverymanController';

const deliverymansRoutes = Router();
const createDeliverymanController = new CreateDeliverymanController();

deliverymansRoutes.post('/', createDeliverymanController.handle);

export { deliverymansRoutes };
