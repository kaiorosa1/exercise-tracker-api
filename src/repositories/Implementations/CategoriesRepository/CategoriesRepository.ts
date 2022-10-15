import { Repository } from "typeorm";
import { Manager } from "../../../database";
import { ICreateCategoryDTO } from "../../../dtos/ICreateCategory";
import { AppError } from "../../../errors/AppError";
import { Category } from "../../../models/Category";
import { ICategoriesRepository } from "../../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {

    private repository: Repository<Category>;

    constructor() {
        this.repository = Manager.getRepository(Category);
    }

    async create({ name, description }: ICreateCategoryDTO): Promise<Category> {

        const categoryAlreadyExists = await this.repository.findOne(
            {
                where: { name }
            }
        );

        if (categoryAlreadyExists) {
            throw new AppError("Category Already Exists!");
        }

        const category = this.repository.create({
            name,
            description
        });

        await this.repository.save(category);

        return category;

    }

    async find(id: string): Promise<Category> {

        const foundCategory = await this.repository.findOne(
            {
                where: { id }
            }
        );

        if (!foundCategory) {
            throw new AppError("Category does not exist!");
        }

        return foundCategory;

    }

    async update(id: string, { name, description }: ICreateCategoryDTO): Promise<void> {

        const categoryAlreadyExists = await this.repository.findOne(
            {
                where: { id }
            }
        );

        if (!categoryAlreadyExists) {
            throw new AppError("Must be a valid Category to Update!");
        }

        await this.repository.update(id, {
            name,
            description
        });
    }

    async delete(id: string): Promise<void> {

        const category = await this.repository.findOne(
            {
                where: { id }
            }
        );

        if (!category) {
            throw new AppError("Must be a valid Category to delete!");
        }

        await this.repository.delete(id);
    }


}

export { CategoriesRepository }