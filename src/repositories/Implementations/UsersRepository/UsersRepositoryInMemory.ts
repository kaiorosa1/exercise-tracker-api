import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { User } from "../../../models/User";
import { IUsersRepository } from "../../IUsersRepository";


class UsersRepositoryInMemory implements IUsersRepository {

    users: User[] = [];

    async create({ name, email, password }: ICreateUserDTO): Promise<User> {
        const user = new User();

        Object.assign(user, { name, email, password });

        this.users.push(user);

        return user;
    }

    async find(id: string): Promise<User> {
        const user = this.users.find((user) => user.id === id);
        return user;
    }

    async update(id: string, data: ICreateUserDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

export { UsersRepositoryInMemory }