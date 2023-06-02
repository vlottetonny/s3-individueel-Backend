import { Request, Response } from "express";
import * as GroceryListService from "../services/GroceryList.service";

export const getGroceryListByID = async (req: Request, res: Response) => {
    try {
        const groceryListID = Number(req.params.id);
        const groceryList = await GroceryListService.getGroceryListByID(groceryListID);
        if (groceryList) {
            res.status(200).json(groceryList);
        } else {
            res.status(404).send("Grocery-list not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
}

export const addGroceryList = async (req: Request, res: Response) => {
    try {
        const groceryList = req.body;
        const groceryListID = await GroceryListService.addGroceryList(groceryList);
        if (groceryListID) {
            res.status(200).json(groceryListID);
        } else {
            res.status(500).send("Failed to add grocery-list");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
}

export const deleteGroceryListByID = async (req: Request, res: Response) => {
    try {
        const groceryListID = Number(req.params.id);
        await GroceryListService.deleteGroceryListByID(groceryListID);
        res.status(200).send("Grocery-list deleted successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
}

export const updateGroceryListByID = async (req: Request, res: Response) => {
    try {
        const groceryListID = Number(req.params.id);
        const groceryList = req.body;
        await GroceryListService.updateGroceryListByID(groceryListID, groceryList);
        res.status(200).send("Grocery-list updated successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
}

export const getCurrentGroceryListByID = async (req: Request, res: Response) => {
    try {
        const householdId = Number(req.params.id);
        const groceryList = await GroceryListService.getCurrentGroceryListId(householdId);
        if (groceryList) {
            res.status(200).json(groceryList);
        } else {
            res.status(404).send("Grocery-list not found");
        }
    } catch (error) {
        console.log(error);
    }
}
