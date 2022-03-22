import { Request, Response } from "express";
import { FinalizeDeliveryUseCase } from "./FinalizeDeliveryUseCase";

export class FinalizeDeliveryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id: deliveryman_id } = request.deliveryman;
        const { delivery_id } = request.query;

        if (!delivery_id) {
            return response.status(400).json({
                error: 'Required data missing!'
            });
        }

        const finalizeDelivery = new FinalizeDeliveryUseCase();

        const delivery = await finalizeDelivery.execute({
            delivery_id: delivery_id.toString(),
            deliveryman_id
        });

        return response.json(delivery);
    }
}
