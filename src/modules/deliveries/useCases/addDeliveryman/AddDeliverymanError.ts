import { AppError } from "../../../../shared/error/AppError";

export class AddDeliverymanError extends AppError {
    constructor() {
        super('Delivery does not exist!', 404);
    }
}
