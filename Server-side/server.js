import express from "express";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";

import { userRoutes } from "./src/routes/userRoutes.js";
import { categoryRoutes } from "./src/routes/categoryRoutes.js";
import { reviewRoutes } from "./src/routes/reviewRoutes.js";
import { productRoutes } from "./src/routes/productRoutes.js";
import { authRoutes } from "./src/routes/authRoutes.js";
import { initLocals } from "./src/middleware/initLocals.js";

const PORT = 5000;
const app = express();
dotenv.config();

app.use(cookieParser());

app.use(express.json());
app.use(initLocals);

app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

app.use('/api/v1', userRoutes);
app.use('/api/v1', categoryRoutes);
app.use('/api/v1', productRoutes);
app.use('/api/v1', reviewRoutes);
app.use('/api/v1',authRoutes);

app.listen(PORT, ()=> console.log(`server running at port ${PORT}`))