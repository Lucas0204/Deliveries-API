import { Delivery } from "@prisma/client";

import { IDeliveriesRepository } from "../../repositories/IDeliveriesRepository";
import { DeliveriesRepository } from "../../repositories/implementations/DeliveriesRepository";
import { IFinalizeDelivery } from '../../dtos/IFinalizeDeliveryData';

export class FinalizeDeliveryUseCase {
    private deliveriesRepository: IDeliveriesRepository;

    constructor() {
        this.deliveriesRepository = new DeliveriesRepository();
    }

    async execute({ delivery_id, deliveryman_id }: IFinalizeDelivery): Promise<Delivery> {
        const delivery = await this.deliveriesRepository.finalizeDelivery({
            delivery_id,
            deliveryman_id
        });

        return delivery;
    }
}
