import { Repository } from "typeorm";
import { Manager } from "../../../database";
import { ICreateExerciseDTO } from "../../../dtos/ICreateExerciseDTO";
import { AppError } from "../../../errors/AppError";
import { Exercise } from "../../../models/Exercise";
import { IExercisesRepository } from "../../IExercisesRepository";

class ExercisesRepository implements IExercisesRepository {
    private repository: Repository<Exercise>;

    constructor() {
        this.repository = Manager.getRepository(Exercise);
    }
    
    async create({
        title,
        duration,
        description,
        date,
        user_id,
        category_id
    }: ICreateExerciseDTO): Promise<Exercise> {

        const exerciseAlreadyExists = await this.repository.findOne(
            {
                where: { title }
            }
        );


        if (exerciseAlreadyExists) {
            throw new AppError("Exercise Already Exists!");
        }

        const exercise = this.repository.create({
            title,
            duration,
            description,
            date,
            user_id,
            category_id
        });

        await this.repository.save(exercise);

        return exercise;
    }

    async find(id: string): Promise<Exercise> {

        const foundExercise = await this.repository.findOne(
            {
                where: { id }
            }
        );

        if (!foundExercise) {
            throw new AppError("Exercise does not exist!");
        }

        return foundExercise;
    }

    update(id: string, data: ICreateExerciseDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<Exercise> {
        throw new Error("Method not implemented.");
    }

}

export { ExercisesRepository }