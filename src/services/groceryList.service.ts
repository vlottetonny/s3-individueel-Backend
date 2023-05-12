import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class GroceryListService {
    constructor(private readonly groceryListRepository: any = prisma.grocery_list) {}

    public async getGroceryListById(groceryListId: number): Promise<GroceryList> {
        const groceryList = await this.groceryListRepository.findUnique({
            where: {
                id: groceryListId
            },
            include: {
                items: true
            }
        });

        return groceryList;
    }
}
