import { Router } from 'express';
import * as GroceryItemController from '../controllers/GroceryItem.controller';

const router = Router();

router.get("/get/:id", GroceryItemController.getGroceryItemByID);
router.post("/add", GroceryItemController.addGroceryItem);
router.delete("/delete/:id", GroceryItemController.deleteGroceryItemByID);
router.put("/update/:id", GroceryItemController.updateGroceryItemByID);

export default router;
