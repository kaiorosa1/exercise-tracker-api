import { Request, Response } from "express";
import { container } from "tsyringe";
import { UserService } from "../services/UserService";

class UsersController {

    async create(request: Request, response: Response) {
        const { name, email, password } = request.body;

        const userService = container.resolve(UserService);

        const user = await userService.create({ name, email, password });

        return response.status(201).json({ message: "User Created!", data: user });
    }

    async find(request: Request, response: Response) {
        const { id } = request.params;

        const userService = container.resolve(UserService);

        const foundUser = await userService.find(id);

        return response.json({ message: "User Found!", data: foundUser });
    }

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { name, email, password } = request.body;

        const userService = container.resolve(UserService);

        await userService.update(id, { name, email, password });

        return response.json({ message: "User Updated!", data: { name, email, password } });
    }


    async delete(request: Request, response: Response) {
        const { id } = request.params;

        const userService = container.resolve(UserService);

        await userService.delete(id);

        return response.json({ message: "User Deleted!", data: id });
    }

}

export { UsersController }