import { Router } from "express";
import * as UserController from "../controllers/User.controller";

const router = Router();

router.get("/get/:id", UserController.getUserByID)
router.post("/add", UserController.addUser)
router.delete("/delete/:id", UserController.deleteUserByID)
router.put("/update/:id", UserController.updateUserByID)
router.post("/login", UserController.loginUser)

export default router;
