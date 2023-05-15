import {grocery_item, PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function getGroceryItemByID(id: number) {
    const groceryItem = await prisma.grocery_item.findUnique({
        where: {
            id: id
        }
    })
    return groceryItem;
}

export async function addGroceryItem(groceryItem: any): Promise<void>{
    try {
        await prisma.grocery_item.create({
            data: groceryItem
        })
    } catch (error) {
        console.error("groceryItem.repository.ts: Failed to add grocery item.");
        throw new Error("Failed to add grocery item.");
    }
}

export async function deleteGroceryItemByID(id: number): Promise<void>{
    try {
        await prisma.grocery_item.delete({
            where: {
                id: id
            }
        })
    } catch (error) {
        console.error("groceryItem.repository.ts: Failed to delete grocery item.");
        throw new Error("Failed to delete grocery item.");
    }
}

export async function updateGroceryItemByID(id: number, groceryItem: any): Promise<void>{
    try {
        await prisma.grocery_item.update({
            where: {
                id: id
            },
            data: groceryItem
        })
    } catch (error) {
        console.error("groceryItem.repository.ts: Failed to update grocery item.");
        throw new Error("Failed to update grocery item.");
    }
}
