import { Client, Delivery } from '@prisma/client';

import { prisma } from '../../../../shared/database/prismaClient';

export class GetAllDeliveriesUseCase {
    async execute(client_id: string): Promise<Client & { deliveries: Delivery[] }> {
        const clientDeliveries = await prisma.client.findUnique({
            where: {
                id: client_id
            },
            include: {
                deliveries: true
            }
        });

        return clientDeliveries;
    }
}
