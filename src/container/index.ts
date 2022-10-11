import { container } from "tsyringe";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";
import { IExercisesRepository } from "../repositories/IExercisesRepository";
import { CategoriesRepository } from "../repositories/Implementations/CategoriesRepository/CategoriesRepository";
import { ExercisesRepository } from "../repositories/Implementations/ExercisesRepository/ExercisesRepository";
import { UsersRepository } from "../repositories/Implementations/UsersRepository/UsersRepository";
import { IUsersRepository } from "../repositories/IUsersRepository";


container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<IExercisesRepository>(
    "ExercisesRepository",
    ExercisesRepository
);