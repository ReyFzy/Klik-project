import express from "express";
import { createCategory, deleteCategory, updateCategory } from "../controllers/categoryController.js";

const router = express.Router();

router.post('/category', createCategory);
router.patch('/category/:id', updateCategory);
router.delete('/category/:id', deleteCategory);

export const categoryRoutes = router;
