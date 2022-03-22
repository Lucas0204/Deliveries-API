import { Request, Response } from "express";
import { GetDeliveriesUseCase } from "./GetDeliveriesUseCase";

export class GetDeliveriesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id: deliveryman_id } = request.deliveryman;

        const getDeliveries = new GetDeliveriesUseCase();

        const deliveries = await getDeliveries.execute(deliveryman_id);

        return response.json(deliveries);
    }
}
