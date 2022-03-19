import { Request, Response, NextFunction } from 'express';
import { verify, decode } from 'jsonwebtoken';

import { JwtTokenError } from '../../error/JwtTokenError';

const { JwtInvalidTokenError, JwtTokenMissingError } = JwtTokenError;

interface IPayloadData {
    username: string;
    client: boolean;
    deliveryman: boolean;

}

export async function ensureDeliverymanAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authToken = request.headers.authorization;

    if (!authToken) {
        const error = new JwtTokenMissingError();
        return response.status(
            error.statusCode
        ).json({
            error: error.message
        });
    }

    const token = authToken.split(' ')[1];

    try {
        const { sub } = verify(token, process.env.JWT_SECRET) as { sub: string };
        const payload = decode(token, { complete: true }).payload as IPayloadData;

        if (payload.deliveryman) {
            request.deliveryman = {
                id: sub
            };

            return next();
        }

        if (payload.client) {
            return response.status(401).json({
                error: 'This route is for deliverymans!'
            })
        }
    } catch (err) {
        const error = new JwtInvalidTokenError();
        return response.status(
            error.statusCode
        ).json({
            error: error.message
        });
    }
}
