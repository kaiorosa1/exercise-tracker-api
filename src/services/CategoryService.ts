import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

@injectable()
class CategoryService {

    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ) { }

    async create({ name, description }) {

        const category = await this.categoriesRepository.create({
            name,
            description
        });

        return category;
    }

    async find(id: string) {

        const category = await this.categoriesRepository.find(id);

        return category;
    }
}

export { CategoryService }