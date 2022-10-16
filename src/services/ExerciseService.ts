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

        await this.exercisesRepository.update(id, data);

    }

    async delete(id: string) {

        await this.exercisesRepository.delete(id);

    }

    async getExercisesByUser(user_id: string, filter: any) {
        
        const userExercises = await this.exercisesRepository.getExercisesByUser(user_id, filter);

        return userExercises;
    }

}

export { ExerciseService }