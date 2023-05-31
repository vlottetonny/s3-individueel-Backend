import * as UserRepository from '../repositories/User.repository';
import * as GroceryListRepository from '../repositories/GroceryList.repository';
import * as HouseholdRepository from '../repositories/Household.repository';
import {user_account} from "@prisma/client";

const jwt = require('jsonwebtoken');

export async function getUserByID(id: number): Promise<user_account | null> {
    return await UserRepository.getUserByID(id);
}

export async function addUser(user: any){
    return await UserRepository.addUser(user);
}

export async function deleteUserByID(id: number): Promise<void>{
    try {
        await UserRepository.deleteUserByID(id);
    } catch (error) {
        console.error("User.service.ts: Failed to delete user.");
        throw new Error("Failed to delete user.");
    }
}

export async function updateUserByID(id: number, user: any): Promise<void>{
    try {
        await UserRepository.updateUserByID(id, user);
    } catch (error) {
        console.error("User.service.ts: Failed to update user.");
        throw new Error("Failed to update user.");
    }
}

export async function loginUser(user: any): Promise<any | null> {
    const payload = await UserRepository.loginUser(user);
    let success: boolean;
    success = payload !== null;
    const userId = payload?.id || null;
    const authToken = jwt.sign(payload, process.env.JWT_SECRET);
    let householdId = null;
    let currentGroceryListId = null;
    console.log("userId: " + userId)
    if (userId !== null) {
        householdId = await UserRepository.getHouseholdIDByUserID(userId);
        console.log("householdId: " + householdId)
        if (householdId !== null) {
            currentGroceryListId = await GroceryListRepository.getCurrentGroceryListId(householdId);
        }
    }
    const loginResponse = { success, userId, authToken, currentGroceryListId, householdId };
    console.log(loginResponse);
    return loginResponse;
}

export async function updateUserHouseholdID(id: number, name: string, password: string): Promise<any>{
    try {
        console.log(id + " " + name + " " + password)
        const credentials = {name, password};
        const householdId = await HouseholdRepository.getHouseholdByCredentials(credentials);
        console.log(householdId);
        let success: boolean;
        if (householdId === null) {
            success = false;
        } else {
            success = await UserRepository.updateUserHouseholdID(id, householdId);
        }
        return {success, householdId};
    } catch (error) {
        console.error("User.service.ts: Failed to get household.");
        throw new Error("Failed to get household.");
    }
}
