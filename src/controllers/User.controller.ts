import { Request, Response } from "express";
import * as UserService from "../services/User.service";

export const getUserByID = async (req: Request, res: Response) => {
    try {
        const userID = Number(req.params.id);
        const user = await UserService.getUserByID(userID);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).send("User not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
};

