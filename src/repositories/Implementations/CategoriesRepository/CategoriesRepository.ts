import { Repository } from "typeorm";
import { Category } from "../../../models/Category";

class CategoriesRepository extends Repository<Category> {

}

export { CategoriesRepository }