import express from "express";
import { Register } from "../controllers/userController.js";

const router = express.Router();

router.post('/register', Register);

export const userRoutes = router;