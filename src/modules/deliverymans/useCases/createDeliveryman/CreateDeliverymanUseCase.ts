import { Deliveryman } from '@prisma/client';
import { hash } from 'bcryptjs';

import { prisma } from '../../../../shared/database/prismaClient';
import { CreateDeliverymanError } from './CreateDeliverymanError';

interface ICreateDeliverymanData {
    username: string;
    email: string;
    password: string;
}

export class CreateDeliverymanUseCase {
    async execute({
        username,
        email,
        password
    }: ICreateDeliverymanData): Promise<Deliveryman> {
        const deliveryman = await prisma.deliveryman.findFirst({
            where: {
                username: {
                    equals: username,
                    mode: 'insensitive'
                },
                OR: {
                    email: {
                        equals: email,
                        mode: 'insensitive'
                    }
                }
            }
        });

        if (deliveryman) {
            throw new CreateDeliverymanError();
        }

        const passwordHash = await hash(password, 8);

        return await prisma.deliveryman.create({
            data: {
                username,
                email,
                password: passwordHash
            }
        });
    }
}
