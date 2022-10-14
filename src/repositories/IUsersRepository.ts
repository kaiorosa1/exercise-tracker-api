import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../models/User";

interface IUsersRepository {
    
    create(data: ICreateUserDTO): Promise<User>;
    find(id: string): Promise<User>;
    update(id: string, data: ICreateUserDTO): Promise<User>;
    delete(id: string): Promise<User>;
    
}

export { IUsersRepository }