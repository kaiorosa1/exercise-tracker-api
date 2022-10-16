import { Router } from "express";
import { ExerciseController } from "../controllers/ExerciseController";

const exerciseRoutes = Router();

const exerciseController = new ExerciseController();

exerciseRoutes.post('/', exerciseController.create);
exerciseRoutes.put('/:id', exerciseController.update);
exerciseRoutes.get('/log', exerciseController.getExercisesByUser);
exerciseRoutes.get('/:id', exerciseController.find);
exerciseRoutes.delete('/:id', exerciseController.delete);


export { exerciseRoutes }