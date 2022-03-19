import { Request, Response } from "express";
import { CreateDeliveryUseCase } from './CreateDeliveryUseCase';

export class CreateDeliveryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id: client_id } = request.client;
        const { item_name } = request.body;

        if (!item_name || !client_id) {
            return response.status(400).json({
                error: 'Required data missing!'
            });
        }

        const createDelivery = new CreateDeliveryUseCase();

        const delivery = await createDelivery.execute({
            item_name,
            client_id
        });

        return response.json(delivery);
    }
}
