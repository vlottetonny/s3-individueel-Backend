import { Router } from "express";
import * as UserController from "../controllers/User.controller";

const router = Router();

router.get("/get/:id", UserController.getUserByID);

export default router;
