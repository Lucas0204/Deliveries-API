import { Router } from 'express';
import { CreateDeliveryController } from '../../../modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const deliveriesRoutes = Router();

const createDeliveryController = new CreateDeliveryController();

deliveriesRoutes.post(
    '/',
    ensureAuthenticated,
    createDeliveryController.handle
);

export { deliveriesRoutes };
