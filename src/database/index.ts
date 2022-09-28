import { DataSource } from "typeorm";

const AppDataSource = new DataSource(
{
    type: "sqlite",
    database: "./src/database/database.sqlite"
});


AppDataSource.initialize();

export {AppDataSource};