import { Request, Response } from 'express';
import { CreateDeliverymanUseCase } from './CreateDeliverymanUseCase';

export class CreateDeliverymanController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { username, email, password } = request.body;

        if (!username || !email || !password) {
            return response.status(400).json({
                error: 'Required data missing!'
            });
        }

        const createDeliveryman = new CreateDeliverymanUseCase();

        const deliveryman = await createDeliveryman.execute({
            username,
            email,
            password
        });
        
        return response.json(deliveryman);
    }
}
