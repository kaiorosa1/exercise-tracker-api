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

}

export { CategoriesRepository }