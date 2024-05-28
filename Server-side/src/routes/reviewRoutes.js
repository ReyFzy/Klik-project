import express from "express";
import * as reviewController from "../controllers/reviewController.js";
import { authenticated } from "../middleware/authenticated.js";

const router = express.Router();

router.post('/review/:product_id', authenticated, reviewController.createReview);
router.post('/like/:product_id', authenticated, reviewController.createLike);

export const reviewRoutes = router;