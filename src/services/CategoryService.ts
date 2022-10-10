import { inject, injectable } from "tsyringe";
import { Manager } from "../database";
import { User } from "../models/User";
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