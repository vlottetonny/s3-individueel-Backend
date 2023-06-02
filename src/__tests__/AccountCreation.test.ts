import { PrismaClient } from '@prisma/client';
import { getUserByID, getHouseholdIDByUserID, deleteUserByID, loginUser, addUser } from '../repositories/User.repository';
import {addHousehold, getHouseholdByCredentials} from "../repositories/Household.repository";

const prisma = new PrismaClient();

let testUserId: number | null = null;
let testHouseholdId: number | null = null;

describe('Account creation', () => {
    describe('addUser', () => {
        it('should add a user', async () => {
            const user = {
              username: "test",
                first_name: "test",
                last_name: "test",
              password: "test"
            };
            const result = await addUser(user);
            expect(result).toBe(true);
        });
    });

    describe('loginUser', () => {
        it('should login a user', async () => {
            const user = {
                username: "test",
                password: "test"
            };
            const result = await loginUser(user);
            if (result) {
                testUserId = result.id;
            }
            expect(result).not.toBeNull();
        });
    });

    describe('addHousehold', () => {
        it('should make a new household', async () => {
            const household = {
                name: "test",
                password: "test",
                household_creator_id: testUserId!
            };
            const result = await addHousehold(household);
            expect(result).not.toBeNull();
        });
    });

    describe('getHouseholdByCredentials', () => {
        it('should return a household', async () => {
            const household = {
                name: "test",
                password: "test"
            };
            const result = await getHouseholdByCredentials(household);
            if (result) {
                testHouseholdId = result;
            }
            expect(result).not.toBeNull();
        });
    });

    describe('updateHouseholdByID', () => {
        it ('should update a user his household_id', async () => {
            const result = await prisma.user_account.update({
                where: {
                    id: testUserId!
                },
                data: {
                    household_id: testHouseholdId!
                }
            });
            expect(result).not.toBeNull();
        });
    });

    describe('getUserByID', () => {
        it('should return the test user', async () => {
            const user = await getUserByID(testUserId!);
            expect(user).not.toBeNull();
        });
    });

    describe('getHouseholdIDByUserID', () => {
        it('should return the household id of the test user', async () => {
            const householdId = await getHouseholdIDByUserID(testUserId!);
            expect(householdId).toBe(testHouseholdId);
        });
    });
    describe('deleteUserByID', () => {
        it('should delete the test user', async () => {
            const result = await deleteUserByID(testUserId!);
            expect(result).toBe(true);
        });
    });
});

export { testUserId };
