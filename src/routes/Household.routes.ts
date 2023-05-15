import Router from 'express';
import * as HouseholdController from '../controllers/Household.controller';

const router = Router();

router.get("/get/:id", HouseholdController.getHouseholdByID);
router.post("/add", HouseholdController.addHousehold);
router.delete("/delete/:id", HouseholdController.deleteHouseholdByID);
router.put("/update/:id", HouseholdController.updateHouseholdByID);

export default router;
