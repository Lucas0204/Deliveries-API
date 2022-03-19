import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { prisma } from '../../../shared/database/prismaClient';
import { AuthenticateClientError } from './AuthenticateClientError';


interface IAuthClientData {
    email: string;
    password: string;
}

export class AuthenticateClientUseCase {
    async execute({ email, password }: IAuthClientData): Promise<string> {
        const client = await prisma.client.findFirst({
            where: { email }
        });

        if (!client) {
            throw new AuthenticateClientError();
        }

        const passwordMatch = await compare(password, client.password);

        if (!passwordMatch) {
            throw new AuthenticateClientError();
        }

        const payload = {
            username: client.username,
            client: true,
            deliveryman: false
        };

        const token = sign(payload, process.env.JWT_SECRET, {
            subject: client.id,
            expiresIn: '1d'
        });

        return token;
    }
}
