import { PrismaClient} from "@prisma/client";
import { addGroceryList, getGroceryListByID } from "../repositories/GroceryList.repository";
import { addGroceryItem} from "../repositories/GroceryItem.repository";
import { testUser, testHousehold } from "../TestDummyData/DummyData";

const prisma = new PrismaClient();

let testGroceryListId: number | null = null;

describe('Use Grocerylist', () => {
   describe('addGroceryList', () => {
       it('should add a grocery list', async () => {
           const groceryList = {
               household_id: testHousehold.id,
           };
           const result = await addGroceryList(groceryList);
              if (result) {
                  testGroceryListId = result;
              }
           expect(result).not.toBeNull();
       });
   });

   describe('getGroceryListByID', () => {
       it('should get a grocery list', async () => {
           const result = await getGroceryListByID(testGroceryListId!);
           expect(result).not.toBeNull();
       });
   });

   describe('addGroceryItem', () => {
         it('should add a grocery item', async () => {
              const groceryItem = {
                  main_text: "test",
                  sub_text: "test",
                  added_by_id: testUser.id,
                  grocery_list_id: testGroceryListId!,
              };
              const result = await addGroceryItem(groceryItem);
              expect(result).toBe(true);
         });
   });

   describe('getGroceryListByID', () => {
         it('should get a grocery list and check if groceryItem is added', async () => {
           const result = await getGroceryListByID(testGroceryListId!);
           expect(result!.items).not.toBeNull();
         });
   });

   describe ('deleteGroceryListByID', () => {
        it('should delete a grocery list', async () => {
            await prisma.grocery_list.delete({
               where: {
                   id: testGroceryListId!
               }
           });
            const result = await getGroceryListByID(testGroceryListId!);
            expect(result).toBeNull();
        });
   });
});
