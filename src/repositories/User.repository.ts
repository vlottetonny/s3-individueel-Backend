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




