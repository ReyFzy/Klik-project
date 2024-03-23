import express from "express";
import { createReview } from "../controllers/reviewController.js";

const router = express.Router();

router.post('/review/:product_id', createReview);

export const reviewRoutes = router;