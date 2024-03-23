import express from "express";
import { deleteUser } from "../controllers/userController.js";

const router = express.Router();

router.delete('/user/:id', deleteUser);

export const userRoutes = router;