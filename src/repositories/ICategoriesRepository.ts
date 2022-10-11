import { ICreateCategoryDTO } from "../dtos/ICreateCategory";
import { Category } from "../models/Category";

interface ICategoriesRepository {
    //TODO: review all the users methods and DTOs
    create(data: ICreateCategoryDTO): Promise<Category>;

}

export { ICategoriesRepository }