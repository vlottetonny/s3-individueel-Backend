import * as UserRepository from '../repositories/User.repository';
import * as GroceryListRepository from '../repositories/GroceryList.repository';
import * as HouseholdRepository from '../repositories/Household.repository';
import {user_account} from "@prisma/client";

const jwt = require('jsonwebtoken');

export async function getUserByID(id: number): Promise<user_account | null> {
    const user = await UserRepository.getUserByID(id);
    return user;
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
    if (payload === null) {
        success = false;
    } else {
        success = true;
    }
    const userId = payload?.id || null;
    const authToken = jwt.sign(payload, process.env.JWT_SECRET);
    const currentGroceryListId = await GroceryListRepository.getCurrentGroceryListId(userId);
    let householdId = null; // Declare householdId and initialize it with null
    if (userId !== null) {
        householdId = await UserRepository.getHouseholdIDByUserID(userId);
    }
    const loginResponse = { success, userId, authToken, currentGroceryListId, householdId };
    console.log(loginResponse);
    return loginResponse;
}

export async function updateUserHouseholdID(id: number, name: string, password: string): Promise<any>{
    try {
        const credentials = {name, password};
        const household = await HouseholdRepository.getHouseholdByCredentials(credentials);
        let success: boolean;
        if (household === null) {
            success = false;
        } else {
            success = await UserRepository.updateUserHouseholdID(id, household.id);
        }
        const data = {success, household};
        return data;
    } catch (error) {
        console.error("User.service.ts: Failed to get household.");
        throw new Error("Failed to get household.");
    }
}
