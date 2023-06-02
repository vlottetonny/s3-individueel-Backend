import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getGroceryListByID(id: number) {
    const groceryList = await prisma.grocery_list.findUnique({
        where: {
            id: id
        },
        include: {
            items: true
        }
    })
    return groceryList;
}

export async function addGroceryList(groceryList: any){
    try {
        const createdGroceryList = await prisma.grocery_list.create({
            data: groceryList
        })
        return createdGroceryList.id;
    } catch (error) {
        console.error("groceryList.repository.ts: Failed to add grocery list.");
        throw new Error("Failed to add grocery list.");
    }
}

export async function deleteGroceryListByID(id: number){
    try {
        await prisma.grocery_list.delete({
            where: {
                id: id
            }
        })
    } catch (error) {
        console.error("groceryList.repository.ts: Failed to delete grocery list.");
        throw new Error("Failed to delete grocery list.");
    }
}

export async function updateGroceryListByID(id: number, groceryList: any): Promise<void>{
    try {
        await prisma.grocery_list.update({
            where: {
                id: id
            },
            data: groceryList
        })
    } catch (error) {
        console.error("groceryList.repository.ts: Failed to update grocery list.");
        throw new Error("Failed to update grocery list.");
    }
}

export async function getCurrentGroceryListId(householdId?: number) {
    const groceryList = await prisma.grocery_list.findFirst({
        where: {
            household_id: householdId,
            is_bought: false
        },
        select: {
            id: true, is_bought: true
        }
    })
    return groceryList?.id;
}

