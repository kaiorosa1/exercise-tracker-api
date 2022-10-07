import { Router } from "express";
import { UsersController } from "../controllers/UserController";

const usersRoutes = Router();

const userController = new UsersController();

usersRoutes.post('/', userController.create);
usersRoutes.put('/:id', userController.update);
usersRoutes.get('/:id', userController.find);
usersRoutes.delete('/:id', userController.delete);

export { usersRoutes }