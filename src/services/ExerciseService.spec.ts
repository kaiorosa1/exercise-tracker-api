import { ExercisesRepositoryInMemory } from "../repositories/Implementations/ExercisesRepository/ExercisesRepositoryInMemory";
import { ExerciseService } from "./ExerciseService";


let exercisesRepositoryInMemory: ExercisesRepositoryInMemory;
let exercisesService: ExerciseService;

describe("Create a new category", () => {
    
    beforeEach(() => {
        exercisesRepositoryInMemory = new ExercisesRepositoryInMemory();
        exercisesService = new ExerciseService(exercisesRepositoryInMemory);
    });

    it("should be able to create a new exercise", async () => {
        const exercise = {  
            title: "Exercise from July 2022",
            description: "This is another test description",
            duration: "25 min",
            date: "2022-07-15",
            user_id: "95c48dd7-1176-4092-8297-23d17ab4f02d",
            category_id: "98a58c32-5341-4405-bec9-8e9e78ce199e"
        }

        const result = await exercisesService.create(exercise);
        
        expect(result).toHaveProperty("id");
    });
});