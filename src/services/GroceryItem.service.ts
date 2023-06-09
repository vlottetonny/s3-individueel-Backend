import * as GroceryItemRepository from '../repositories/GroceryItem.repository';
import {grocery_item} from "@prisma/client";

export async function getGroceryItemByID(id: number): Promise<grocery_item | null> {
    const groceryItem = await GroceryItemRepository.getGroceryItemByID(id);
    return groceryItem;
}

export async function addGroceryItem(groceryItem: any) {
    const modifiedGroceryItem = {
        ...groceryItem,
        added_by_id: parseInt(groceryItem.added_by_id),
        grocery_list_id: parseInt(groceryItem.grocery_list_id)
    };

    return await GroceryItemRepository.addGroceryItem(modifiedGroceryItem);
}

export async function deleteGroceryItemByID(id: number): Promise<void>{
    try {
        await GroceryItemRepository.deleteGroceryItemByID(id);
    } catch (error) {
        console.error("GroceryItem.service.ts: Failed to delete grocery item.");
        throw new Error("Failed to delete grocery item.");
    }
}

export async function updateGroceryItemByID(id: number, groceryItem: any): Promise<void>{
    try {
        await GroceryItemRepository.updateGroceryItemByID(id, groceryItem);
    } catch (error) {
        console.error("GroceryItem.service.ts: Failed to update grocery item.");
        throw new Error("Failed to update grocery item.");
    }
}
