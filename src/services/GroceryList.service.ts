import * as GroceryListRepository from '../repositories/GroceryList.repository';
import { grocery_list } from "@prisma/client";
import e from "express";

export async function getGroceryListByID(id: number): Promise<grocery_list | null> {
    const groceryList = await GroceryListRepository.getGroceryListByID(id);
    return groceryList;
}

export async function addGroceryList(groceryList: any){
    try {
        const groceryListId = await GroceryListRepository.addGroceryList(groceryList);
        return groceryListId;
    } catch (error) {
        console.error("GroceryList.service.ts: Failed to add grocery list.");
        throw new Error("Failed to add grocery list.");
    }
}

export async function deleteGroceryListByID(id: number): Promise<void>{
    try {
        await GroceryListRepository.deleteGroceryListByID(id);
    } catch (error) {
        console.error("GroceryList.service.ts: Failed to delete grocery list.");
        throw new Error("Failed to delete grocery list.");
    }
}

export async function updateGroceryListByID(id: number, groceryList: any): Promise<void>{
    try {
        await GroceryListRepository.updateGroceryListByID(id, groceryList);
    } catch (error) {
        console.error("GroceryList.service.ts: Failed to update grocery list.");
        throw new Error("Failed to update grocery list.");
    }
}

export async function getCurrentGroceryListId(householdId?: number) {
    const groceryList = await GroceryListRepository.getCurrentGroceryListId(householdId);
    return groceryList;
}
