import { ICreateCategoryDTO } from "../dtos/ICreateCategory";
import { Category } from "../models/Category";

interface ICategoriesRepository {
    
    create(data: ICreateCategoryDTO): Promise<Category>;
    find(id: string): Promise<Category>;
    update(id: string, data: ICreateCategoryDTO): Promise<void>;
    delete(id: string): Promise<void>;
}

export { ICategoriesRepository }