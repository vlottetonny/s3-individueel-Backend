import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getHouseholdByID(id: number) {
    const household = await prisma.household.findUnique({
        where: {
            id: id
        },
        /*include: {
            members: true,   // This is not working for some reason
        }*/
    })
    return household;
}
