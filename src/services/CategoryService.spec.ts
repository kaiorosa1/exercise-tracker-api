import { CategoriesRepositoryInMemory } from "../repositories/Implementations/CategoriesRepository/CategoriesRepositoryInMemory";
import { CategoryService } from "./CategoryService";


let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;
let categoriesService: CategoryService;

describe("Create a new category", () => {
    
    beforeEach(() => {
        categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
        categoriesService = new CategoryService(categoriesRepositoryInMemory);
    });

    it("should be able to create a new category", async () => {
        const category = {
            name: "Running",
            description: "Running Category"
        }

        const result = await categoriesService.create(category);
        
        expect(result).toHaveProperty("id");
    });
});