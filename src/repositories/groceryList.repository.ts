import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class GroceryListRepository {
    constructor(private readonly groceryListRepository: any = prisma.grocery_list) {}

    public async getListing(groceryListId: number) {
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

export default new GroceryListRepository();
