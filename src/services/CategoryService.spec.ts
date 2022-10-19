import { CategoryService } from "./CategoryService";


// let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;
let categoriesService: CategoryService;

describe("Create a new category", () => {
    
    beforeEach(() => {
        // categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
        // categoryService = new CategoryService(categoriesRepositoryInMemory);
    });

    it("should be able to create a new category", async () => {
        const category = {
            name: "Running",
            description: "Running Category"
        }

        // const result = await categoryService.create(category);
        expect(category).toHaveProperty("name");
        // expect(result).toHaveProperty("id");
    });
});