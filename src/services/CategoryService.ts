import { inject, injectable } from "tsyringe";
import { ICreateCategoryDTO } from "../dtos/ICreateCategory";
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

    async update(id: string, data: ICreateCategoryDTO) {

        const category = await this.categoriesRepository.update(id, data);

        return category;
    }

    async delete(id: string) {

        const category = await this.categoriesRepository.delete(id);

        return category;
    }

}

export { CategoryService }