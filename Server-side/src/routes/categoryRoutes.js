import express from "express";
import * as categoryController from "../controllers/categoryController.js";

const router = express.Router();

router.get('/categories', categoryController.getAllCategory);
router.post('/category', categoryController.createCategory);
router.patch('/category/:id', categoryController.updateCategory);
router.delete('/category/:id', categoryController.deleteCategory);

export const categoryRoutes = router;
