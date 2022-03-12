import { Request, Response } from 'express';
import { AuthenticateClientUseCase } from './AuthenticateClientUseCase';

export class AuthenticateClientController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;

        if (!email || !password) {
            return response.status(400).json({
                error: 'Required data missing!'
            });
        }

        const authenticateClient = new AuthenticateClientUseCase();

        const token = await authenticateClient.execute({
            email,
            password
        });

        return response.json({
            token
        });
    }
}
