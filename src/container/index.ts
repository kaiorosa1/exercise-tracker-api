import { container } from "tsyringe";
import { UsersRepository } from "../repositories/Implementations/UsersRepository/UsersRepository";
import { IUsersRepository } from "../repositories/IUsersRepository";


container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

// container.registerSingleton<ICategoriesRepository>(
//     "CategoriesRepository",
//     CategoriesRepository
// );

// container.registerSingleton<IExercisesRepository>(
//     "ExercisesRepository",
//     ExercisesRepository
// );