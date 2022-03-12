import { Client } from '@prisma/client';
import { hash } from 'bcryptjs';

import { prisma } from '../../../../shared/database/prismaClient';

interface ICreateClient {
    email: string;
    username: string;
    password: string;
}

export class CreateClientUseCase {
    private client: Client;

    async execute({ email, username, password }: ICreateClient): Promise<Client> {
        this.client = await prisma.client.findFirst({
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

        if (this.client) {
            throw new Error('Client already exists!');
        }

        const passwordHash = await hash(password, 8);

        this.client = await prisma.client.create({
            data: {
                email,
                username,
                password: passwordHash
            }
        });

        return this.client;
    }
}
