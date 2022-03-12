import 'dotenv/config';
import 'express-async-errors';

import express, { NextFunction, Request, Response } from 'express';

import { AppError } from '../../shared/error/AppError';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            error: err.message
        });
    }

    return res.status(500).json({
        status: 'Error',
        error: err.message
    });
});

export { app };
