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

        const categoryService = container.resolve(CategoryService);

        const foundCategory = await categoryService.find(id);


        return response.json({ message: "Category Found!", data: foundCategory });
    }

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { name, description } = request.body;

        const categoryService = container.resolve(CategoryService);

        await categoryService.update(id, { name, description });

        return response.json({ message: "Category Updated!", data: { name, description } });
    }


    async delete(request: Request, response: Response) {
        const { id } = request.params;

        const categoryService = container.resolve(CategoryService);

        await categoryService.delete(id);

        return response.json({ message: "Category Deleted!", data: id });
    }
}

export { CategoryController }