import { Delivery } from '@prisma/client';
import { IDeliveriesRepository } from '../../repositories/IDeliveriesRepository';

import { DeliveriesRepository } from '../../repositories/implementations/DeliveriesRepository';

interface ICeateDeliveryData {
    item_name: string;
    client_id: string;
}

export class CreateDeliveryUseCase {
    private deliveriesRepository: IDeliveriesRepository;

    constructor() {
        this.deliveriesRepository = new DeliveriesRepository();
    }

    async execute({
        item_name,
        client_id
    }: ICeateDeliveryData): Promise<Delivery> {
        const delivery = await this.deliveriesRepository.create({
            item_name,
            client_id
        });

        return delivery;
    }
}
