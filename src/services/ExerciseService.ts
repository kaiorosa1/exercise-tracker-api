import { inject, injectable } from "tsyringe";
import { ICreateExerciseDTO } from "../dtos/ICreateExerciseDTO";
import { IExercisesRepository } from "../repositories/IExercisesRepository";

@injectable()
class ExerciseService {
    constructor(
        @inject("ExercisesRepository")
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

    async find(id: string) {

        const exercise = await this.exercisesRepository.find(id);

        return exercise;
    }

    async update(id: string, data: ICreateExerciseDTO) {

        const exercise = await this.exercisesRepository.update(id, data);

        return exercise;
    }

    async delete(id: string) {

        const exercise = await this.exercisesRepository.delete(id);

        return exercise;
    }
}

export { ExerciseService }