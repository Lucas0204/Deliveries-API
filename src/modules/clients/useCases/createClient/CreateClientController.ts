import { Request, Response } from 'express';
import { CreateClientUseCase } from './CreateClientUseCase';

export class CreateClientController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { email, username, password } = request.body;

        if (!email || !username || !password) {
            return response.status(400).json({
                error: 'Required data missing!'
            });
        }

        const createClient = new CreateClientUseCase();

        const client = await createClient.execute({
            email,
            username,
            password
        });

        return response.status(201).json(client);
    }
}
