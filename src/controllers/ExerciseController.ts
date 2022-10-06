import { Request, Response } from "express";
import { Manager } from "../database";
import { Exercise } from "../models/Exercise";

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

        const exerciseRepository = Manager.getRepository(Exercise);

        const exercise = exerciseRepository.create({
            title,
            duration,
            description,
            date,
            user_id,
            category_id

        });

        await exerciseRepository.save(exercise);
        return response.status(201).json({ message: "Exercise Created!", data: exercise });
    }

}

export { ExerciseController }