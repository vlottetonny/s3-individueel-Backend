import { Router } from "express";
import { getGroceryListById } from "../controllers/groceryList.controller";

const router = Router();

router.get("/:id", getGroceryListById);

export default router;
