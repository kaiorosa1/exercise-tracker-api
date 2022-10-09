import { User } from "../models/User";

interface IUsersRepository {
    //TODO: review all the users methods and DTOs
    create(data): Promise<User>;
    
}

export { IUsersRepository }