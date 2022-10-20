import { ICreateCategoryDTO } from "../../../dtos/ICreateCategory";
import { Category } from "../../../models/Category";
import { ICategoriesRepository } from "../../ICategoriesRepository";


class CategoriesRepositoryInMemory implements ICategoriesRepository {

    categories: Category[] = [];

    async create({ name, description }: ICreateCategoryDTO): Promise<Category> {
        const user = new Category();

        Object.assign(user, { name, description });

        this.categories.push(user);

        return user;
    }

    async find(id: string): Promise<Category> {
        const category = this.categories.find((category) => category.id === id);
        return category;
    }

    async update(id: string, data: ICreateCategoryDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

export { CategoriesRepositoryInMemory }