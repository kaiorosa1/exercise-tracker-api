import { DataSource, EntityManager } from "typeorm";

const AppDataSource = new DataSource(
    {
        type: "sqlite",
        database: "./src/database/database.sqlite",
        entities: ["./src/models/**.ts"],
        migrations: ["./src/database/migrations/**.ts"]
    });


const Manager: EntityManager = AppDataSource.manager
AppDataSource.initialize();

export { AppDataSource, Manager };