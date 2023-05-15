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

export const addHousehold = async (req: Request, res: Response) => {
    try {
        const household = req.body;
        await HouseholdService.addHousehold(household);
        res.status(201).send("Household added successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
}

export const deleteHouseholdByID = async (req: Request, res: Response) => {
    try {
        const householdID = Number(req.params.id);
        await HouseholdService.deleteHouseholdByID(householdID);
        res.status(200).send("Household deleted successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
}

export const updateHouseholdByID = async (req: Request, res: Response) => {
    try {
        const householdID = Number(req.params.id);
        const household = req.body;
        await HouseholdService.updateHouseholdByID(householdID, household);
        res.status(200).send("Household updated successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
}


