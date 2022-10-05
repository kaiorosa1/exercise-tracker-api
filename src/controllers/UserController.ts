import { Request, Response } from "express";
import { Manager } from "../database";
import { User } from "../models/User";

class UsersController {

    async create(request: Request, response: Response) {
        const { name, email, password } = request.body;
        const userRepository = Manager.getRepository(User);

        const userAlreadyExists = await userRepository.findOne(
            {
                where: { email }
            }
        );

        if (userAlreadyExists) {
            return response.status(400).json({ error: "User Already exists!" })
        }

        const user = userRepository.create({
            name,
            email,
            password
        });

        await userRepository.save(user);
        return response.status(201).json({ message: "User Created!", data: user });
    }

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { name, email, password } = request.body;

        const userRepository = Manager.getRepository(User);

        const userAlreadyExists = await userRepository.findOne(
            {
                where: { id }
            }
        );

        if (!userAlreadyExists) {
            return response.status(400).json({ error: "Must be a valid User to Update!" })
        }

        await userRepository.update(id, {
            name,
            email,
            password
        });

        return response.json({ message: "User Updated!", data: { name, email, password } });
    }
}

export { UsersController }