import { DataSource, EntityManager } from "typeorm";
import { User } from "../models/User";

const AppDataSource = new DataSource(
    {
        type: "sqlite",
        database: "./src/database/database.sqlite",
        entities: [
            User
        ]
    });


const Manager: EntityManager = AppDataSource.manager
AppDataSource.initialize();

export { AppDataSource, Manager };