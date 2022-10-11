import { Repository } from "typeorm";
import { Manager } from "../../../database";
import { ICreateExerciseDTO } from "../../../dtos/ICreateExerciseDTO";
import { Exercise } from "../../../models/Exercise";
import { IExercisesRepository } from "../../IExercisesRepository";

class ExercisesRepository implements IExercisesRepository {
    private repository: Repository<Exercise>;

    constructor() {
        this.repository = Manager.getRepository(Exercise);
    }

    create(data: ICreateExerciseDTO): Promise<Exercise> {
        throw new Error("Method not implemented.");
    }

}

export { ExercisesRepository }