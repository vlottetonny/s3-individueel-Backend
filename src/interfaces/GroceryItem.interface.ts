interface GroceryItem {
    id: number;
    main_text?: string;
    sub_text?: string;
    in_basket?: boolean;
    added_by_id?: number;
    grocery_list_id?: number;
}
