import { AppError } from '../../../shared/error/AppError';

export class AuthenticateClientError extends AppError {
    constructor() {
        super('Incorrect Email / Password', 401);
    }
}
