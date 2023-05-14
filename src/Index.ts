import express from "express";
import groceryRoutes from "./routes/GroceryItem.routes";
import groceryListRoutes from "./routes/GroceryList.routes";
import UserRoutes from "./routes/User.routes";
import householdRoutes from "./routes/Household.routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use("/api/groceryitem", groceryRoutes);

app.use("/api/grocerylist", groceryListRoutes);

app.use("/api/household", householdRoutes);

app.use("/api/user", UserRoutes);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

