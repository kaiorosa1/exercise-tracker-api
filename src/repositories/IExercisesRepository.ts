import { ICreateExerciseDTO } from "../dtos/ICreateExerciseDTO";
import { Exercise } from "../models/Exercise";

interface IExercisesRepository {

    create(data: ICreateExerciseDTO): Promise<Exercise>;
    find(id: string): Promise<Exercise>;
    update(id: string, data: ICreateExerciseDTO): Promise<void>;
    delete(id: string): Promise<void>;
    
}

export { IExercisesRepository }