import * as GroceryListRepository from '../repositories/GroceryList.repository';
import { grocery_list } from "@prisma/client";

export async function getGroceryListByID(id: number): Promise<grocery_list | null> {
    const groceryList = await GroceryListRepository.getGroceryListByID(id);
    return groceryList;
}
