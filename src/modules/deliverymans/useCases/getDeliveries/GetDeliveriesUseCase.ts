import { IGetDeliveriesResponse } from "../../dtos/IGetDeliveriesResponse";
import { IDeliverymansRepository } from "../../repositories/IDeliverymansRepository";
import { DeliverymansRepository } from "../../repositories/implementations/DeliverymansRepository";

export class GetDeliveriesUseCase {
    private deliverymansRepository: IDeliverymansRepository;

    constructor() {
        this.deliverymansRepository = new DeliverymansRepository();
    }
    
    async execute(deliveryman_id: string): Promise<IGetDeliveriesResponse> {
        return await this.deliverymansRepository.getDeliveries(
            deliveryman_id
        );
    }
}
