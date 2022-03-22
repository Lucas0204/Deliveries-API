import { Delivery } from '@prisma/client';

import { IDeliveriesRepository } from '../../repositories/IDeliveriesRepository';
import { DeliveriesRepository } from '../../repositories/implementations/DeliveriesRepository';

export class FindAvailableDeliveriesUseCase {
    private deliveriesRepository: IDeliveriesRepository;

    constructor() {
        this.deliveriesRepository = new DeliveriesRepository();
    }

    async execute(): Promise<Delivery[]> {
        return await this.deliveriesRepository.findAvailable();
    }
}
