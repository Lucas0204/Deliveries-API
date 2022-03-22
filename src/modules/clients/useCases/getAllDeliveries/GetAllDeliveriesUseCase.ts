import { Client, Delivery } from '@prisma/client';
import { IClientsRepository } from 'modules/clients/repositories/IClientsRepository';

import { ClientsRepository } from '../../repositories/implementations/ClientsRepository';

export class GetAllDeliveriesUseCase {
    private clientsRepository: IClientsRepository;

    constructor() {
        this.clientsRepository = new ClientsRepository();
    }

    async execute(client_id: string): Promise<Client & { deliveries: Delivery[] }> {
        const clientDeliveries = await this.clientsRepository.getAllDeliveries(
            client_id
        );

        return clientDeliveries;
    }
}
