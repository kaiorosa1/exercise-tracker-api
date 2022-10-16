import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
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

    async find(id: string) {

        const user = await this.usersRepository.find(id);

        return user;
    }

    async update(id: string, data: ICreateUserDTO) {

        await this.usersRepository.update(id, data);

    }

    async delete(id: string) {

        await this.usersRepository.delete(id);

    }

}

export { UserService }