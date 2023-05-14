import { Router } from 'express';
import * as GroceryItemController from '../controllers/GroceryItem.controller';

const router = Router();

router.get("/get/:id", GroceryItemController.getGroceryItemByID);
router.post("/add", GroceryItemController.addGroceryItem);

export default router;
