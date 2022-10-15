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

    async find(id: string): Promise<User> {


        const foundUser = await this.repository.findOne(
            {
                where: { id }
            }
        );

        if (!foundUser) {
            throw new AppError("User does not exist!");
        }

        return foundUser;
    }

    async update(id: string, {name, email, password }: ICreateUserDTO): Promise<void> {

        const userAlreadyExists = await this.repository.findOne(
            {
                where: { id }
            }
        );

        if (!userAlreadyExists) {
            throw new AppError("Must be a valid User to Update!");
        }

        await this.repository.update(id, {
            name,
            email,
            password
        });

    }


    async delete(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }

    
}

export { UsersRepository }