import { AppError } from '../../../../shared/error/AppError';

export class CreateDeliverymanError extends AppError {
    constructor() {
        super('Username / Email already exists!');
    }
}
