import { Router } from 'express';

import { clientsRoutes } from './clients.routes';
import { deliverymansRoutes } from './deliverymans.routes';
import { deliveriesRoutes } from './deliveries.routes';

const routes = Router();

routes.use('/clients', clientsRoutes);
routes.use('/deliverymans', deliverymansRoutes);
routes.use('/delivery', deliveriesRoutes);

export { routes };
