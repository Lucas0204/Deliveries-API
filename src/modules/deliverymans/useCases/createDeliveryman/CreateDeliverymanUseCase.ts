import { Deliveryman } from '@prisma/client';
import { hash } from 'bcryptjs';

import { CreateDeliverymanError } from './CreateDeliverymanError';
import { DeliverymansRepository } from '../../repositories/implementations/DeliverymansRepository';
import { IDeliverymansRepository } from 'modules/deliverymans/repositories/IDeliverymansRepository';

interface ICreateDeliverymanData {
    username: string;
    email: string;
    password: string;
}

export class CreateDeliverymanUseCase {
    private deliverymansRepository: IDeliverymansRepository;

    constructor() {
        this.deliverymansRepository = new DeliverymansRepository();
    }

    async execute({
        username,
        email,
        password
    }: ICreateDeliverymanData): Promise<Deliveryman> {
        const deliveryman = await this.deliverymansRepository.findByUsernameOrEmail({
            username,
            email
        });

        if (deliveryman) {
            throw new CreateDeliverymanError();
        }

        const passwordHash = await hash(password, 8);

        return await this.deliverymansRepository.create({
            username,
            email,
            password: passwordHash
        });
    }
}
