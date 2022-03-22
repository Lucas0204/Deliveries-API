import { Client } from '@prisma/client';
import { hash } from 'bcryptjs';
import { IClientsRepository } from 'modules/clients/repositories/IClientsRepository';

import { ClientsRepository } from '../../repositories/implementations/ClientsRepository';

interface ICreateClient {
    email: string;
    username: string;
    password: string;
}

export class CreateClientUseCase {
    private client: Client;
    private clientsRepository: IClientsRepository;

    constructor() {
        this.clientsRepository = new ClientsRepository();
    }

    async execute({ email, username, password }: ICreateClient): Promise<Client> {
        this.client = await this.clientsRepository.findByUsernameOrEmail({
            username,
            email
        });

        if (this.client) {
            throw new Error('Client already exists!');
        }

        const passwordHash = await hash(password, 8);

        this.client = await this.clientsRepository.create({
            username,
            email,
            password: passwordHash
        });

        return this.client;
    }
}
