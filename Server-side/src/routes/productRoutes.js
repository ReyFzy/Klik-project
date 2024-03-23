import express from "express";
import { createProduct, deleteProduct, getAllProduct, updateProduct } from "../controllers/productController.js";

const router = express.Router();

router.post("/product/", createProduct);
router.patch("/product/:id", updateProduct);
router.get("/products/:category", getAllProduct);
router.delete("/product/:id", deleteProduct);

export const productRoutes = router;