import { AppError } from '../../../shared/error/AppError';

export class AuthenticateDeliverymanError extends AppError {
    constructor() {
        super('Incorrect Email / Password!', 401);
    }
}
