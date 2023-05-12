import express from "express";
import groceryRoutes from "./routes/grocery.routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/groceries", groceryRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
