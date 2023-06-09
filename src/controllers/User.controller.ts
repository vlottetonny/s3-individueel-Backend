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
    console.log(req.body);
    try {
        const user = req.body;
        const signupResponse = await UserService.addUser(user);
        if (signupResponse) {
            res.status(201).send(signupResponse);
        } else {
            res.status(500).send("No response from database");
        }
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

export const loginUser = async (req: Request, res: Response) => {
    try {
        const user = req.body;
        const loginResponse = await UserService.loginUser(user);
        if (loginResponse) {
            res.status(200).json(loginResponse);
        } else {
            res.status(404).send("User not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
}

export const updateUserHouseholdID = async (req: Request, res: Response) => {
    console.log(req.body)
    try {
        const userID = Number(req.body.id);
        const name = String(req.body.name);
        const password = String(req.body.password);
        const response = await UserService.updateUserHouseholdID(userID, name, password);
        if (response) {
            res.status(200).json(response);
        } else {
            res.status(404).send("User not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
}
