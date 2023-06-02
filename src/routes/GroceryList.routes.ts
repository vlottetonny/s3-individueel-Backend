import Router from 'express';
import * as GroceryListController from '../controllers/GroceryList.controller';

const router = Router();

router.get("/get/:id", GroceryListController.getGroceryListByID);
router.post("/add", GroceryListController.addGroceryList);
router.delete("/delete/:id", GroceryListController.deleteGroceryListByID);
router.put("/update/:id", GroceryListController.updateGroceryListByID);
router.get("/get/current/:id", GroceryListController.getCurrentGroceryListByID);

export default router;
