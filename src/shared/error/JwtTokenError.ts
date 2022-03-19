import { AppError } from "./AppError";

export namespace JwtTokenError {
    export class JwtTokenMissingError extends AppError {
        constructor() {
            super('Auth Token is missing!', 401);
        }
    }

    export class JwtInvalidTokenError extends AppError {
        constructor() {
            super('Invalid jwt token!', 401);
        }
    }
}
