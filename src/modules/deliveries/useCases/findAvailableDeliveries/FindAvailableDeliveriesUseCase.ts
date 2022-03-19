import { prisma } from '../../../../shared/database/prismaClient';

export class FindAvailableDeliveriesUseCase {
    async execute() {
        const deliveries = await prisma.delivery.findMany({
            where: {
                end_at: null
            }
        });

        return deliveries;
    }
}
