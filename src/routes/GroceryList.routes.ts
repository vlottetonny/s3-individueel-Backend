import Router from 'express';
import * as GroceryListController from '../controllers/GroceryList.controller';

const router = Router();

router.get("/get/:id", GroceryListController.getGroceryListByID);

export default router;
