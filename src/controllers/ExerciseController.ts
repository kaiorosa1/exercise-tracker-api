import { Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../errors/AppError";
import { ExerciseService } from "../services/ExerciseService";

class ExerciseController {

    async create(request: Request, response: Response) {
        const {
            title,
            duration,
            description,
            date,
            user_id,
            category_id
        } = request.body;

        const exerciseService = container.resolve(ExerciseService);

        const exercise = await exerciseService.create({
            title,
            duration,
            description,
            date,
            user_id,
            category_id
        });

        return response.status(201).json({ message: "Exercise Created!", data: exercise });
    }

    async find(request: Request, response: Response) {
        const { id } = request.params;

        const exerciseService = container.resolve(ExerciseService);

        const foundExercise = await exerciseService.find(id);

        return response.json({ message: "Exercise Found!", data: foundExercise });
    }

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const {
            title,
            duration,
            description,
            date,
            user_id,
            category_id
        } = request.body;

        const exerciseService = container.resolve(ExerciseService);

        await exerciseService.update(id, {
            title,
            duration,
            description,
            date,
            user_id,
            category_id
        });

        return response.json({
            message: "Exercise Updated!",
            data: {
                title,
                duration,
                description,
                date,
                user_id,
                category_id
            }
        });
    }


    async delete(request: Request, response: Response) {
        const { id } = request.params;

        const exerciseService = container.resolve(ExerciseService);

        await exerciseService.delete(id);

        return response.json({ message: "Exercise Deleted!", data: id });
    }

    async getExercisesByUser(request: Request, response: Response) {

        const { user_id, date_from, date_to } = request.query;

        if (!user_id) {
            throw new AppError("user_id is required!");
        }

        let filter = {};

        if (date_from) {
            filter = { ...filter, date_from };
        }

        if (date_to) {
            filter = { ...filter, date_to };
        }

        const exerciseService = container.resolve(ExerciseService);

        const userExercises = await exerciseService.getExercisesByUser(user_id as string, filter);

        return response.json({ message: "User Exercices!", data: userExercises });
    }
}

export { ExerciseController }