import { Delivery } from "@prisma/client";
import { IAddDeliverymanData } from "../dtos/IAddDeliverymanData";
import { ICreateDeliveryData } from "../dtos/ICreateDeliveryData";

export interface IDeliveriesRepository {
    create(data: ICreateDeliveryData): Promise<Delivery>;
    findById(delivery_id: string): Promise<Delivery>;
    addDeliveryman(data: IAddDeliverymanData): Promise<Delivery>;
    findAvailable(): Promise<Delivery[]>;
}
