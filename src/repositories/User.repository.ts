import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getUserByID( id: number ) {
    const user = await prisma.user_account.findUnique({
        where: {
            id: id
        }
    })
    console.log(user);
    return user;
}

export async function getHouseholdIDByUserID( id: number ) {
    const user = await prisma.user_account.findUnique({
        where: {
            id: id
        }
    })
    return user?.household_id;
}

export async function addUser( user: any ){
    try {
        await prisma.user_account.create({
            data: user
        })
    } catch (error) {
        console.error("user.repository.ts: Failed to add user.");
        throw new Error("Failed to add user.");
        return false;
    }
    return true;
}

export async function deleteUserByID( id: number ){
    try {
        await prisma.user_account.delete({
            where: {
                id: id
            }
        })
    }
    catch (error) {
        console.error("user.repository.ts: Failed to delete user.");
        throw new Error("Failed to delete user.");
        return false;
    }
    return true;
}

export async function updateUserByID( id: number, user: any ): Promise<void>{
    try {
        await prisma.user_account.update({
            where: {
                id: id
            },
            data: user
        })
    } catch (error) {
        console.error("user.repository.ts: Failed to update user.");
        throw new Error("Failed to update user.");
    }
}

export async function loginUser( credentials: any ) {
    const user = await prisma.user_account.findFirst({
        where: {
            username: credentials.username,
            password: credentials.password
        },
    })
    return user || null;
}

export async function updateUserHouseholdID( id: number, householdId: number ){
    try {
        await prisma.user_account.update({
            where: {
                id: id
            },
            data: {
                household_id: householdId
            }
        })
    } catch (error) {
        console.error("user.repository.ts: Failed to add user to household.");
        throw new Error("Failed to add user to household.");
        return false;
    }
    return true;
}

