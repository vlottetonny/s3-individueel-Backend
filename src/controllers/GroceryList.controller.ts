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
