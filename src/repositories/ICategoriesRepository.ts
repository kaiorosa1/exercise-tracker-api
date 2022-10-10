import { Category } from "../models/Category";

interface ICategoriesRepository {
    //TODO: review all the users methods and DTOs
    create(data): Promise<Category>;
    
}

export { ICategoriesRepository }