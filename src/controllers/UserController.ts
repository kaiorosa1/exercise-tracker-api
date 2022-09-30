import { Request, Response } from "express";
import { Manager } from "../database";
import { User } from "../models/User";

class UsersController {

    async create(request: Request, response: Response) {
        const { name, email, password } = request.body;
        const userRepository = Manager.getRepository(User);

        const user = userRepository.create({
            name,
            email,
            password
        });

        await userRepository.save(user);
        return response.json(user);
    }
}

export { UsersController }