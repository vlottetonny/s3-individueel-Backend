import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getHouseholdByID(id: number) {
    const household = await prisma.household.findUnique({
        where: {
            id: id
        },
        include: {
            members: true,   // This is not working for some reason
        }
    })
    return household;
}

export async function addHousehold(household: any): Promise<void>{
    try {
        await prisma.household.create({
            data: household
        })
    } catch (error) {
        console.error("household.repository.ts: Failed to add household.");
        throw new Error("Failed to add household.");
    }
}

export async function deleteHouseholdByID(id: number): Promise<void>{
    try {
        await prisma.household.delete({
            where: {
                id: id
            }
        })
    } catch (error) {
        console.error("household.repository.ts: Failed to delete household.");
        throw new Error("Failed to delete household.");
    }
}

export async function updateHouseholdByID(id: number, household: any): Promise<void>{
    try {
        await prisma.household.update({
            where: {
                id: id
            },
            data: household
        })
    } catch (error) {
        console.error("household.repository.ts: Failed to update household.");
        throw new Error("Failed to update household.");
    }
}
