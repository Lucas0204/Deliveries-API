import { Router } from 'express';

import { clientsRoutes } from './clients.routes';
import { deliverymansRoutes } from './deliverymans.routes';

const routes = Router();

routes.use('/clients', clientsRoutes);
routes.use('/deliverymans', deliverymansRoutes);

export { routes };
