import { Repository } from "typeorm";
import { Category } from "../models/Category";

class UsersRepository extends Repository<Category> {

}

export { UsersRepository }