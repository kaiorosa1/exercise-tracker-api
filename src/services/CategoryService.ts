import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

@injectable()
class CategoryService {

    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ) { }

    async create({ name, description }) {

        const user = await this.categoriesRepository.create({
            name,
            description
        });

        return user;
    }
}

export { CategoryService }