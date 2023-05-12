import { Request, Response } from "express";
import { GroceryListService } from "../services/groceryList.service";

const groceryListService = new GroceryListService();

export const getGroceryListById = async (req: Request, res: Response) => {
    try {
        const groceryListId = parseInt(req.params.id);
        const groceryList = await groceryListService.getGroceryListById(groceryListId);
        res.json(groceryList);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};
