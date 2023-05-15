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

export const addUser = async (req: Request, res: Response) => {
    try {
        const user = req.body;
        await UserService.addUser(user);
        res.status(201).send("User added successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
}

export const deleteUserByID = async (req: Request, res: Response) => {
    try {
        const userID = Number(req.params.id);
        await UserService.deleteUserByID(userID);
        res.status(200).send("User deleted successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
}

export const updateUserByID = async (req: Request, res: Response) => {
    try {
        const userID = Number(req.params.id);
        const user = req.body;
        await UserService.updateUserByID(userID, user);
        res.status(200).send("User updated successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
}
