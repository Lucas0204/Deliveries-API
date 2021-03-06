import { Client, Delivery } from "@prisma/client";

import { IGetDeliveriesResponse } from '../dtos/IGetDeliveriesResponse';
import { ICreateClientData } from "../dtos/ICreateClientData";
import { IFindClientData } from "../dtos/IFindClientData";

export interface IClientsRepository {
    create(data: ICreateClientData): Promise<Client>;
    findByUsernameOrEmail(data: IFindClientData): Promise<Client>;
    getAllDeliveries(client_id: string): Promise<IGetDeliveriesResponse>;
}
