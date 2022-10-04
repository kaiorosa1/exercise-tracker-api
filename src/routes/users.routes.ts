import { Router } from "express";
import { UsersController } from "../controllers/UserController";

const usersRoutes = Router();

const userController = new UsersController();

usersRoutes.post('/', userController.create);

export { usersRoutes }