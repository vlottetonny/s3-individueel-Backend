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
exports.GroceryService = void 0;
class GroceryService {
    getGroceryById(groceryId) {
        return __awaiter(this, void 0, void 0, function* () {
            // Add  ORM logic here to fetch grocery by ID
            // For now, return mock grocery
            if (groceryId === 1) {
                return {
                    groceryId: 1,
                    inBasket: false,
                    groceryText: "Example Grocery",
                    grocerySubText: "An example grocery item",
                };
            }
            return null;
        });
    }
}
exports.GroceryService = GroceryService;
