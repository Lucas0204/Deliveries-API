import { Delivery } from "@prisma/client";

export interface IGetDeliveriesResponse {
    id: string;
    username: string;
    email: string;
    deliveries: Delivery[];
}