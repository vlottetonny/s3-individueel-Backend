import { Request, Response } from "express";
import * as GroceryItemService from '../services/GroceryItem.service';

export const getGroceryItemByID = async (req: Request, res: Response) => {
    try {
        const groceryItemID = Number(req.params.id);
        const groceryItem = await GroceryItemService.getGroceryItemByID(groceryItemID);
        if (groceryItem) {
            res.status(200).json(groceryItem);
        } else {
            res.status(404).send("Grocery item not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
}

export const addGroceryItem = async (req: Request, res: Response) => {
    try {
        const groceryItem = req.body;
        await GroceryItemService.addGroceryItem(groceryItem);
        res.status(201).send("Grocery item added successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
}

