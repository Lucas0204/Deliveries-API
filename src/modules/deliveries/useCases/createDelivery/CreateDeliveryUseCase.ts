import { Delivery } from '@prisma/client';

import { prisma } from '../../../../shared/database/prismaClient';

interface ICeateDeliveryData {
    item_name: string;
    client_id: string;
}

export class CreateDeliveryUseCase {
    async execute({
        item_name,
        client_id
    }: ICeateDeliveryData): Promise<Delivery> {
        const delivery = await prisma.delivery.create({
            data: {
                item_name,
                client_id
            }
        });

        return delivery;
    }
}
