import { grocery } from "./grocery.model";

export interface groceryList {
    id: number;
    name: string;
    groceryItems: grocery[];
}
