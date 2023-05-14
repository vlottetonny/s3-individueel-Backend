import {Request, Response} from "express";
import * as HouseholdService from "../services/Household.service";

export const getHouseholdByID = async (req: Request, res: Response) => {
    try {
        const householdID = Number(req.params.id);
        const household = await HouseholdService.getHouseholdByID(householdID);
        if (household) {
            res.status(200).json(household);
        } else {
            res.status(404).send("Household not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
}
