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

        const token = sign({ username: client.username }, process.env.JWT_SECRET, {
            subject: client.id,
            expiresIn: '1d'
        });

        return token;
    }
}
