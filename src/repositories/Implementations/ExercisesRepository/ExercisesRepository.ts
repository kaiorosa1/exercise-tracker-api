import { Repository } from "typeorm";
import { Exercise } from "../../../models/Exercise";

class ExercisesRepository extends Repository<Exercise> {

}

export { ExercisesRepository }