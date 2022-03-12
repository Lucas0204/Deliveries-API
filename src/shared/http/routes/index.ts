import { Router } from 'express';

import { clientsRoutes } from './clients.routes';

const routes = Router();

routes.use('/clients', clientsRoutes);

export { routes };
