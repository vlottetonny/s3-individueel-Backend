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
    console.log(req.body)
    try {
        const groceryItem = req.body;
        const groceryAddResponse = await GroceryItemService.addGroceryItem(groceryItem);
        if (groceryAddResponse) {
            res.status(200).json(groceryAddResponse);
        } else {
            res.status(500).send("Failed to add grocery item");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
}

export const deleteGroceryItemByID = async (req: Request, res: Response) => {
    try {
        const groceryItemID = Number(req.params.id);
        await GroceryItemService.deleteGroceryItemByID(groceryItemID);
        res.status(200).send("Grocery item deleted successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
}

export const updateGroceryItemByID = async (req: Request, res: Response) => {
    try {
        const groceryItemID = Number(req.params.id);
        const groceryItem = req.body;
        await GroceryItemService.updateGroceryItemByID(groceryItemID, groceryItem);
        res.status(200).send("Grocery item updated successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
}
