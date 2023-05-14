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
