import { Repository } from "typeorm";
import { Manager } from "../../../database";
import { User } from "../../../models/User";
import { IUsersRepository } from "../../IUsersRepository";


class UsersRepository implements IUsersRepository{
    
    private repository: Repository<User>;

    constructor() {
        this.repository = Manager.getRepository(User);
    }

    async create({ name, email, password }): Promise<User> {

        const userAlreadyExists = await this.repository.findOne(
            {
                where: { email }
            }
        );

        // TODO: handle errors
        // if (userAlreadyExists) {
        //     return response.status(400).json({ error: "User Already exists!" })
        // }

        const user = this.repository.create({
            name,
            email,
            password
        });

        await this.repository.save(user);

        return user;
    }
}

export { UsersRepository }