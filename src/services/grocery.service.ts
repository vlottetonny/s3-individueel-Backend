import Grocery from "../models/grocery.model";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class GroceryService {
    async getGroceryById(groceryId: number): Promise<Grocery | null> {
        // Add  ORM logic here to fetch grocery by ID
        // For now, return mock grocery
        if (groceryId === 1) {
            return {
                groceryId: 1,
                inBasket: false,
                groceryText: "Example Grocery",
                grocerySubText: "An example grocery item",
            };
        }
        return null;
    }
}
