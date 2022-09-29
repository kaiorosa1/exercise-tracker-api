import { Router } from "express";
import { UsersController } from "./controllers/UserController";

const router = Router();

const userController = new UsersController();

router.post('/users',userController.create);

export {router}