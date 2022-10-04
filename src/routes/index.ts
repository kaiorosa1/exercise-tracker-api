import { Router } from "express";
import { UsersController } from "../controllers/UserController";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);

export { router }