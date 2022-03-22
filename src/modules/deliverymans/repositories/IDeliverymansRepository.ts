import { Deliveryman } from "@prisma/client";
import { ICreateDeliverymanData } from "../dtos/ICreateDeliverymanData";
import { IFindDeliverymanData } from "../dtos/IFindDeliverymanData";

export interface IDeliverymansRepository {
    create(data: ICreateDeliverymanData): Promise<Deliveryman>;
    findByUsernameOrEmail(data: IFindDeliverymanData): Promise<Deliveryman>;
}