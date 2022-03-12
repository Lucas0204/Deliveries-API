import { Router } from 'express';
import { AuthenticateClientController } from '../../../modules/accounts/authenticateClient/AuthenticateClientController';

import { CreateClientController } from '../../../modules/clients/useCases/createClient/CreateClientController';

const clientsRoutes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

clientsRoutes.post('/', createClientController.handle);

clientsRoutes.post('/login', authenticateClientController.handle)

export { clientsRoutes };
