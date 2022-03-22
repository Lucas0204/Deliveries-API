import { Router } from 'express';

import {
    AuthenticateClientController
} from '../../../modules/accounts/authenticateClient/AuthenticateClientController';

import {
    CreateClientController
} from '../../../modules/clients/useCases/createClient/CreateClientController';

import {
    GetAllDeliveriesController    
} from '../../../modules/clients/useCases/getAllDeliveries/GetAllDeliveriesController';

import { ensureClientAuthenticated } from '../middlewares/ensureClientAuthenticated';

const clientsRoutes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const getAllDeliveriesController = new GetAllDeliveriesController();

clientsRoutes.post('/', createClientController.handle);

clientsRoutes.post('/login', authenticateClientController.handle);

clientsRoutes.get(
    '/deliveries',
    ensureClientAuthenticated,
    getAllDeliveriesController.handle
);

export { clientsRoutes };
