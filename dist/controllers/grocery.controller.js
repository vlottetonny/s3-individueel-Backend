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
exports.getGroceryById = void 0;
const grocery_service_1 = require("../services/grocery.service");
const groceryService = new grocery_service_1.GroceryService();
const getGroceryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const groceryId = parseInt(req.params.id);
        const grocery = yield groceryService.getGroceryById(groceryId);
        res.json(grocery);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getGroceryById = getGroceryById;
