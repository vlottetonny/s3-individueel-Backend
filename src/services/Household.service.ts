import * as HouseholdRepository from '../repositories/Household.repository';
import {household} from "@prisma/client";

export async function getHouseholdByID(id: number): Promise<household | null> {
    const household = await HouseholdRepository.getHouseholdByID(id);
    return household;
}
