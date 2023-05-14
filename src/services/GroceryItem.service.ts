import * as GroceryItemRepository from '../repositories/GroceryItem.repository';
import {grocery_item} from "@prisma/client";

export async function getGroceryItemByID(id: number): Promise<grocery_item | null> {
    const groceryItem = await GroceryItemRepository.getGroceryItemByID(id);
    return groceryItem;
}

export async function addGroceryItem(groceryItem: any): Promise<void>{
    try {
        await GroceryItemRepository.addGroceryItem(groceryItem);
    } catch (error) {
        console.error("GroceryItem.service.ts: Failed to add grocery item.");
        throw new Error("Failed to add grocery item.");
    }
}
