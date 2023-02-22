import { ICreateExerciseDTO } from "../../../dtos/ICreateExerciseDTO";
import { Exercise } from "../../../models/Exercise";
import { IExercisesRepository } from "../../IExercisesRepository";


class ExercisesRepositoryInMemory implements IExercisesRepository {
    
    exercises: Exercise[] = [];

    async create({ title, description, duration, date, user_id, category_id }: ICreateExerciseDTO): Promise<Exercise> {
        const exercise = new Exercise();

        Object.assign(exercise, { title, description, duration, date, user_id, category_id });

        this.exercises.push(exercise);

        return exercise;
    }

    async find(id: string): Promise<Exercise> {
        const exercise = this.exercises.find((exercise) => exercise.id === id);
        return exercise;
    }

    async update(id: string, data: ICreateExerciseDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    getExercisesByUser(user_id: string, filter: any): Promise<Exercise[]> {
        throw new Error("Method not implemented.");
    }
}

export { ExercisesRepositoryInMemory }