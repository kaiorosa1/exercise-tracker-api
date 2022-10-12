import { Repository } from "typeorm";
import { Manager } from "../../../database";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { AppError } from "../../../errors/AppError";
import { User } from "../../../models/User";
import { IUsersRepository } from "../../IUsersRepository";

class UsersRepository implements IUsersRepository {

    private repository: Repository<User>;

    constructor() {
        this.repository = Manager.getRepository(User);
    }

    async create({ name, email, password }: ICreateUserDTO): Promise<User> {

        const userAlreadyExists = await this.repository.findOne(
            {
                where: { email }
            }
        );


        if (userAlreadyExists) {
            throw new AppError("User Already Exists!");
        }

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