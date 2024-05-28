import express from "express";
import * as productController from "../controllers/productController.js";
import { authenticated } from "../middleware/authenticated.js";
import { uploadProductPicture } from "../services/multerService.js";

const router = express.Router();

router.post("/product/", authenticated, productController.createProduct);
router.post("/product/create", uploadProductPicture, authenticated, productController.createProductNImg);
router.patch("/product/:id", authenticated, productController.updateProduct);
router.get("/products", productController.getAllProduct);
router.get("/product/:id", productController.getProductById);
router.delete("/product/:id", productController.deleteProduct);

export const productRoutes = router;