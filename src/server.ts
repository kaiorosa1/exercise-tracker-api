import "reflect-metadata";
import "./container";
import express, { NextFunction, Request, Response } from 'express';
import "express-async-errors";
import { router } from "./routes";
import "./database";

import { AppError } from "./errors/AppError";

import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(router);

// handling thrown errors
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            message: error.message
        });
    }

    return response.status(500).json({
        status: "error",
        message: `Internal Server Error - ${error.message}`
    });
});

app.listen(process.env.PORT || 3333, () => console.log("Server is running!"));
