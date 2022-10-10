import { Request, Response } from "express";
import { container } from "tsyringe";
import { Manager } from "../database";
import { Category } from "../models/Category";
import { CategoryService } from "../services/CategoryService";

class CategoryController {

    async create(request: Request, response: Response) {
        const { name, description } = request.body;

        const categoryService = container.resolve(CategoryService);

        const category = await categoryService.create({ name, description });

        return response.status(201).json({ message: "Category Created!", data: category });
    }

    async find(request: Request, response: Response) {
        const { id } = request.params;

        const categoryRepository = Manager.getRepository(Category);

        const foundCategory = await categoryRepository.findOne(
            {
                where: { id }
            }
        );

        if (!foundCategory) {
            return response.status(400).json({ error: "Category does not exist!" })
        }

        return response.json({ message: "Category Found!", data: foundCategory });
    }

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { name, description } = request.body;

        const categoryRepository = Manager.getRepository(Category);

        const categoryAlreadyExists = await categoryRepository.findOne(
            {
                where: { id }
            }
        );

        if (!categoryAlreadyExists) {
            return response.status(400).json({ error: "Must be a valid Category to Update!" })
        }

        await categoryRepository.update(id, {
            name,
            description
        });

        return response.json({ message: "Category Updated!", data: { name, description } });
    }


    async delete(request: Request, response: Response) {
        const { id } = request.params;

        const categoryRepository = Manager.getRepository(Category);

        const category = await categoryRepository.findOne(
            {
                where: { id }
            }
        );

        if (!category) {
            return response.status(400).json({ error: "Must be a valid Category to delete!" })
        }

        await categoryRepository.delete(id);

        return response.json({ message: "Category Deleted!", data: category });
    }
}

export { CategoryController }