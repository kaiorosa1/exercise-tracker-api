import { Router } from "express";
import { CategoryController } from "../controllers/CategoryController";

const categoryRoutes = Router();

const categoryController = new CategoryController();

categoryRoutes.post('/', categoryController.create);
categoryRoutes.put('/:id', categoryController.update);
categoryRoutes.get('/:id', categoryController.find);
categoryRoutes.delete('/:id', categoryController.delete);

export { categoryRoutes }