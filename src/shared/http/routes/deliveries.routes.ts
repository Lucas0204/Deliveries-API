import { Router } from 'express';

import { FindAvailableDeliveriesController } from '../../../modules/deliveries/useCases/findAvailableDeliveries/FindAvailableDeliveriesController';
import { CreateDeliveryController } from '../../../modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { AddDeliverymanController } from '../../../modules/deliveries/useCases/addDeliveryman/AddDeliverymanController';

import { ensureClientAuthenticated } from '../middlewares/ensureClientAuthenticated';
import { ensureDeliverymanAuthenticated } from '../middlewares/ensureDeliverymanAuthenticated';

const deliveriesRoutes = Router();

const createDeliveryController = new CreateDeliveryController();
const findAvailableDeliveriesController = new FindAvailableDeliveriesController();
const addDeliverymanController = new AddDeliverymanController();

deliveriesRoutes.post(
    '/',
    ensureClientAuthenticated,
    createDeliveryController.handle
);

deliveriesRoutes.get(
    '/available',
    ensureDeliverymanAuthenticated,
    findAvailableDeliveriesController.handle
);

deliveriesRoutes.patch(
    '/add_deliveryman',
    ensureDeliverymanAuthenticated,
    addDeliverymanController.handle
);

export { deliveriesRoutes };
