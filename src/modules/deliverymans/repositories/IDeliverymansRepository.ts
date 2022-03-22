import { Deliveryman } from "@prisma/client";
import { ICreateDeliverymanData } from "../dtos/ICreateDeliverymanData";
import { IFindDeliverymanData } from "../dtos/IFindDeliverymanData";
import { IGetDeliveriesResponse } from "../dtos/IGetDeliveriesResponse";

export interface IDeliverymansRepository {
    create(data: ICreateDeliverymanData): Promise<Deliveryman>;
    findByUsernameOrEmail(data: IFindDeliverymanData): Promise<Deliveryman>;
    getDeliveries(deliveryman_id: string): Promise<IGetDeliveriesResponse>;
}