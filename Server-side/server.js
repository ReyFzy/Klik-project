import express from "express";
import dotenv from "dotenv";
import { userRoutes } from "./src/routes/userRoutes.js";
import { categoryRoutes } from "./src/routes/categoryRoutes.js";

const PORT = 5000;
const app = express();
dotenv.config();

app.use(express.json())
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/category', categoryRoutes);
app.listen(PORT, ()=> console.log(`server running at port ${PORT}`))