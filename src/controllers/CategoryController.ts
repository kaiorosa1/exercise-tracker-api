import { Request, Response } from "express";
import { Manager } from "../database";
import { Category } from "../models/Category";

class CategoryController {

    async create(request: Request, response: Response) {
        const { name, description } = request.body;
        const categoryRepository = Manager.getRepository(Category);

        const categoryAlreadyExists = await categoryRepository.findOne(
            {
                where: { name }
            }
        );

        if (categoryAlreadyExists) {
            return response.status(400).json({ error: "Category Already exists!" })
        }

        const user = categoryRepository.create({
            name,
            description
        });

        await categoryRepository.save(user);
        return response.json(user);
    }
}

export { CategoryController }