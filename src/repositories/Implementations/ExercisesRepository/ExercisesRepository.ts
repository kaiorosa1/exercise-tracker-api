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

        // TODO: handle errors
        // if (userAlreadyExists) {
        //     return response.status(400).json({ error: "User Already exists!" })
        // }

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

}

export { ExercisesRepository }