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
