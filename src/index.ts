import express from "express";
/*import groceryRoutes from "./routes/grocery.routes";*/
import groceryListRoutes from "./routes/groceryList.routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

/*app.use("/api/groceries", groceryRoutes);*/

app.use("/api/grocery-lists", groceryListRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
