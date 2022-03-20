import { Request, Response } from 'express';

import { AddDeliverymanUseCase } from './AddDeliverymanUseCase';

export class AddDeliverymanController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id: deliveryman_id } = request.deliveryman;
        const { delivery_id } = request.query as { delivery_id: string };

        if (!delivery_id) {
            return response.status(400).json({
                error: 'Required data missing!'
            });
        }

        const addDeliveryman = new AddDeliverymanUseCase();
        
        const delivery = await addDeliveryman.execute({
            delivery_id,
            deliveryman_id
        });

        return response.json(delivery);
    }
}
