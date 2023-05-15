import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getUserByID( id: number ) {
    const user = await prisma.user_account.findUnique({
        where: {
            id: id
        }
    })
    return user;
}

export async function addUser( user: any ): Promise<void>{
    try {
        await prisma.user_account.create({
            data: user
        })
    } catch (error) {
        console.error("user.repository.ts: Failed to add user.");
        throw new Error("Failed to add user.");
    }
}

export async function deleteUserByID( id: number ): Promise<void>{
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
    }
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


