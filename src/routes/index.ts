import { Router } from "express";
import { categoryRoutes } from "./category.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/categories", categoryRoutes);

export { router }