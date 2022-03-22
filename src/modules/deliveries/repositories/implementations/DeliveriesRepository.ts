import { Delivery } from "@prisma/client";
import { prisma } from "../../../../shared/database/prismaClient";

import { IAddDeliverymanData } from "../../dtos/IAddDeliverymanData";
import { ICreateDeliveryData } from "../../dtos/ICreateDeliveryData";
import { IDeliveriesRepository } from "../IDeliveriesRepository";

export class DeliveriesRepository implements IDeliveriesRepository {
    async create({
        item_name,
        client_id
    }: ICreateDeliveryData): Promise<Delivery> {
        return await prisma.delivery.create({
            data: {
                item_name,
                client_id
            }
        });
    }

    async findById(delivery_id: string): Promise<Delivery> {
        return await prisma.delivery.findUnique({
            where: {
                id: delivery_id
            }
        });
    }

    async findAvailable(): Promise<Delivery[]> {
        return await prisma.delivery.findMany({
            where: {
                end_at: null,
                deliveryman_id: null
            }
        });
    }

    async addDeliveryman({
        delivery_id,
        deliveryman_id
    }: IAddDeliverymanData): Promise<Delivery> {
        return await prisma.delivery.update({
            where: {
                id: delivery_id
            },
            data: {
                deliveryman_id
            }
        });
    }
}
