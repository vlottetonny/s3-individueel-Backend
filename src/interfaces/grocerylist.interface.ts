interface GroceryList {
    id: number;
    is_bought?: boolean;
    household_id?: number;
    bought_date?: Date;
    items?: GroceryItem[];
}

interface GroceryItem {
    id: number;
    main_text?: string;
    sub_text?: string;
    in_basket?: boolean;
    added_by_id?: number;
    grocery_list_id?: number;
}
