import { Router } from "express";
import { ExerciseController } from "../controllers/ExerciseController";

const exerciseRoutes = Router();

const exerciseController = new ExerciseController();

exerciseRoutes.post('/', exerciseController.create);

export { exerciseRoutes }