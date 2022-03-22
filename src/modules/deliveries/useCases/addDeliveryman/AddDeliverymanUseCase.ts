import { Delivery } from "@prisma/client";

import { prisma } from '../../../../shared/database/prismaClient';
import { AddDeliverymanError } from "./AddDeliverymanError";

interface IAddDeliverymanData {
    delivery_id: string;
    deliveryman_id: string;
}

export class AddDeliverymanUseCase {
    private delivery: Delivery;

    async execute({
        delivery_id,
        deliveryman_id
    }: IAddDeliverymanData): Promise<Delivery> {
        this.delivery = await prisma.delivery.findUnique({
            where: { id: delivery_id }
        });

        if (!this.delivery) {
            throw new AddDeliverymanError();
        }

        const delivery = await prisma.delivery.update({
            where: { id: delivery_id },
            data: {
                deliveryman_id
            }
        });

        return delivery;
    }
}
