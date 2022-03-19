import { Request, Response } from 'express';

import { FindAvailableDeliveriesUseCase } from './FindAvailableDeliveriesUseCase';

export class FindAvailableDeliveriesController {
    async handle(request: Request, response: Response): Promise<Response>{
        const findAvailableDeliveries = new FindAvailableDeliveriesUseCase();

        const availableDeliveries = await findAvailableDeliveries.execute();

        return response.json(availableDeliveries);
    }
}
