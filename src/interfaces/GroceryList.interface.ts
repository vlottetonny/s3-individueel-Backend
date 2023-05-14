interface GroceryList {
    id: number;
    is_bought?: boolean;
    household_id?: number;
    bought_date?: Date;
    items?: GroceryItem[];
}


