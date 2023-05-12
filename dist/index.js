"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
/*import groceryRoutes from "./routes/grocery.routes";*/
const groceryList_routes_1 = __importDefault(require("./routes/groceryList.routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
/*app.use("/api/groceries", groceryRoutes);*/
app.use("/api/grocery-lists", groceryList_routes_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
