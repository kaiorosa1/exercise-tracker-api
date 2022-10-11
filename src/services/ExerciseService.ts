import { inject, injectable } from "tsyringe";
import { IExercisesRepository } from "../repositories/IExercisesRepository";

@injectable()
class ExerciseService {
    constructor(
        @inject("ExerciseRepository")
        private exercisesRepository: IExercisesRepository
    ) { }

    async create({
        title,
        duration,
        description,
        date,
        user_id,
        category_id }) {


        const exercise = await this.exercisesRepository.create({
            title,
            duration,
            description,
            date,
            user_id,
            category_id
        });

        return exercise;
    }

}

export { ExerciseService }