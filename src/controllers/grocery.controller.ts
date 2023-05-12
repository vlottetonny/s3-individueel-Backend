import { Request, Response } from "express";
import { GroceryService } from "../services/grocery.service";

const groceryService = new GroceryService();

export const getGroceryById = async (req: Request, res: Response) => {
    try {
        const groceryId = parseInt(req.params.id);
        const grocery = await groceryService.getGroceryById(groceryId);
        res.json(grocery);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};
