import { Request, Response } from 'express';
import { AuthenticateDeliverymanUseCase } from './AuthenticateDeliverymanUseCase';

export class AuthenticateDeliverymanController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;

        if (!email || !password) {
            return response.status(400).json({
                error: 'Required data missing!'
            });
        }

        const authenticateDeliveryman = new AuthenticateDeliverymanUseCase();

        const token = await authenticateDeliveryman.execute({
            email,
            password
        });

        return response.json({
            token
        });
    }
}
