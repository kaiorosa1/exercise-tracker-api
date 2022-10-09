import { inject, injectable } from "tsyringe";
import { Manager } from "../database";
import { User } from "../models/User";
import { IUsersRepository } from "../repositories/IUsersRepository";

@injectable()
class UserService {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async create({ name, email, password }) {

        const user = await this.usersRepository.create({
            name,
            email,
            password
        });

        return user;
    }
}

export { UserService }