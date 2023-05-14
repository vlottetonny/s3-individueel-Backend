import Router from 'express';
import * as HouseholdController from '../controllers/Household.controller';

const router = Router();

router.get("/get/:id", HouseholdController.getHouseholdByID);

export default router;
