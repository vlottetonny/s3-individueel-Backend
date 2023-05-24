import * as UserRepository from '../repositories/User.repository';
import * as groceryListRepository from '../repositories/GroceryList.repository';
import {user_account} from "@prisma/client";

const jwt = require('jsonwebtoken');

export async function getUserByID(id: number): Promise<user_account | null> {
    const user = await UserRepository.getUserByID(id);
    return user;
}

export async function addUser(user: any): Promise<void>{
    try {
        await UserRepository.addUser(user);
    } catch (error) {
        console.error("User.service.ts: Failed to add user.");
        throw new Error("Failed to add user.");
    }
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
    }
    else {
        success = true;
    }
    const userId = payload?.id || null;
    const authToken = jwt.sign(payload, process.env.JWT_SECRET);
    const currentGroceryListId = await groceryListRepository.getCurrentGroceryListId(userId)
    const loginResponse = {success, userId, authToken, currentGroceryListId};
    console.log(loginResponse);
    return loginResponse;
}
