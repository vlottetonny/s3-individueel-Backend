"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGroceryListById = void 0;
const groceryList_service_1 = require("../services/groceryList.service");
const groceryListService = new groceryList_service_1.GroceryListService();
const getGroceryListById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const groceryListId = parseInt(req.params.id);
        const groceryList = yield groceryListService.getGroceryListById(groceryListId);
        res.json(groceryList);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getGroceryListById = getGroceryListById;
