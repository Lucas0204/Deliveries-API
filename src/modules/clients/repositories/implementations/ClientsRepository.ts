import { Client, Delivery } from "@prisma/client";

import { ICreateClientData } from "../../dtos/ICreateClientData";
import { IFindClientData } from "../../dtos/IFindClientData";
import { IGetDeliveriesResponse } from "../../dtos/IGetDeliveriesResponse";
import { prisma } from "../../../../shared/database/prismaClient";
import { IClientsRepository } from "../IClientsRepository";

export class ClientsRepository implements IClientsRepository {
    async create({
        username,
        email,
        password
    }: ICreateClientData): Promise<Client> {
        return await prisma.client.create({
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
    }: IFindClientData): Promise<Client> {
        return await prisma.client.findFirst({
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

    async getAllDeliveries(client_id: string): Promise<IGetDeliveriesResponse> {
        return await prisma.client.findUnique({
            where: {
                id: client_id
            },
            select: {
                deliveries: true,
                id: true,
                username: true,
                email: true
            }
        })
    }
}
