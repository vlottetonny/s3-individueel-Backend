import * as HouseholdRepository from '../repositories/Household.repository';
import {household} from "@prisma/client";

export async function getHouseholdByID(id: number): Promise<household | null> {
    const household = await HouseholdRepository.getHouseholdByID(id);
    return household;
}

export async function addHousehold(household: any): Promise<void>{
    try {
        await HouseholdRepository.addHousehold(household);
    } catch (error) {
        console.error("Household.service.ts: Failed to add household.");
        throw new Error("Failed to add household.");
    }
}

export async function deleteHouseholdByID(id: number): Promise<void>{
    try {
        await HouseholdRepository.deleteHouseholdByID(id);
    } catch (error) {
        console.error("Household.service.ts: Failed to delete household.");
        throw new Error("Failed to delete household.");
    }
}

export async function updateHouseholdByID(id: number, household: any): Promise<void>{
    try {
        await HouseholdRepository.updateHouseholdByID(id, household);
    } catch (error) {
        console.error("Household.service.ts: Failed to update household.");
        throw new Error("Failed to update household.");
    }
}


