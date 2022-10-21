import { UsersRepositoryInMemory } from "../repositories/Implementations/UsersRepository/UsersRepositoryInMemory";
import { UserService } from "./UserService";


let usersRepositoryInMemory: UsersRepositoryInMemory;
let usersService: UserService;

describe("Create a new user", () => {
    
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        usersService = new UserService(usersRepositoryInMemory);
    });

    it("should be able to create a new user", async () => {
        const user = {
            name: "John Smith",
            email: "johnsmith@email.com",
            password: "senhanaosalvaassim"
        }

        const result = await usersService.create(user);
        
        expect(result).toHaveProperty("id");
    });
});