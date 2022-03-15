import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { prisma } from '../../../shared/database/prismaClient';
import { AuthenticateDeliverymanError } from './AuthenticateDeliverymanError';

interface IAuthDeliverymanData {
    email: string;
    password: string;
}

export class AuthenticateDeliverymanUseCase {
    async execute({ email, password }: IAuthDeliverymanData): Promise<string> {
        const deliveryman = await prisma.deliveryman.findFirst({
            where: { email }
        });

        if (!deliveryman) {
            throw new AuthenticateDeliverymanError();
        }

        const passwordMatch = await compare(password, deliveryman.password);

        if (!passwordMatch) {
            throw new AuthenticateDeliverymanError();
        }

        const token = sign({ username: deliveryman.username }, process.env.JWT_SECRET, {
            subject: deliveryman.id,
            expiresIn: '1d'
        });

        return token;
    }
}
