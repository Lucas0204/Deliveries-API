import { Delivery } from "@prisma/client";

import { IDeliveriesRepository } from "../../repositories/IDeliveriesRepository";
import { DeliveriesRepository } from '../../repositories/implementations/DeliveriesRepository';
import { AddDeliverymanError } from "./AddDeliverymanError";

interface IAddDeliverymanData {
    delivery_id: string;
    deliveryman_id: string;
}

export class AddDeliverymanUseCase {
    private delivery: Delivery;
    private deliveriesRepository: IDeliveriesRepository;

    constructor() {
        this.deliveriesRepository = new DeliveriesRepository();
    }

    async execute({
        delivery_id,
        deliveryman_id
    }: IAddDeliverymanData): Promise<Delivery> {
        this.delivery = await this.deliveriesRepository.findById(
            delivery_id
        );

        if (!this.delivery) {
            throw new AddDeliverymanError();
        }

        const delivery = await this.deliveriesRepository.addDeliveryman({
            delivery_id,
            deliveryman_id
        });

        return delivery;
    }
}
