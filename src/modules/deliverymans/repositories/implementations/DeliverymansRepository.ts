import { Deliveryman } from "@prisma/client";
import { prisma } from "../../../../shared/database/prismaClient";

import { ICreateDeliverymanData } from "../../dtos/ICreateDeliverymanData";
import { IFindDeliverymanData } from "../../dtos/IFindDeliverymanData";
import { IDeliverymansRepository } from "../IDeliverymansRepository";

export class DeliverymansRepository implements IDeliverymansRepository {
    async create({
        username,
        email,
        password
    }: ICreateDeliverymanData): Promise<Deliveryman> {
        return await prisma.deliveryman.create({
            data: {
                username,
                email,
                password
            }
        });
    }

    async findByUsernameOrEmail({
        username,
        email
    }: IFindDeliverymanData): Promise<Deliveryman> {
        return await prisma.deliveryman.findFirst({
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
    }
}
