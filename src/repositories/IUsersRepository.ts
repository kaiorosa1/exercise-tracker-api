import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../models/User";

interface IUsersRepository {
    //TODO: review all the users methods and DTOs
    create(data: ICreateUserDTO): Promise<User>;

}

export { IUsersRepository }