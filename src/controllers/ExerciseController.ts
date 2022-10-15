import { Request, Response } from "express";
import { container } from "tsyringe";
import { Manager } from "../database";
import { Exercise } from "../models/Exercise";
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
}

export { ExerciseController }