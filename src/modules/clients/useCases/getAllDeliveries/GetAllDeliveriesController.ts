import { Request, Response } from "express";

import { GetAllDeliveriesUseCase } from './GetAllDeliveriesUseCase';

export class GetAllDeliveriesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id: client_id } = request.client;

        const getAllDeliveries = new GetAllDeliveriesUseCase();

        const deliveries = await getAllDeliveries.execute(client_id);

        return response.json(deliveries);
    }
}
