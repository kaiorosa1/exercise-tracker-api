import { ICreateExerciseDTO } from "../dtos/ICreateExerciseDTO";
import { Exercise } from "../models/Exercise";

interface IExercisesRepository {
    //TODO: review all the users methods and DTOs
    create(data: ICreateExerciseDTO): Promise<Exercise>;

}

export { IExercisesRepository }