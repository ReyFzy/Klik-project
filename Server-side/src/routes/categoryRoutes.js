import express from "express";
import { createCategory, deleteCategory, updateCategory } from "../controllers/categoryController.js";

const router = express.Router();

router.post('/', createCategory);
router.patch('/:id', updateCategory);
router.delete('/:id', deleteCategory);

export const categoryRoutes = router;
