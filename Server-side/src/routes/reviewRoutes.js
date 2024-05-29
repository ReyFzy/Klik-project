import express from "express";
import * as reviewController from "../controllers/reviewController.js";
import { authenticated } from "../middleware/authenticated.js";

const router = express.Router();

router.get('/reviews', reviewController.getAllReview);
router.get('/review/:product_id', reviewController.getReviewByProduct);
router.post('/review/:product_id', authenticated, reviewController.createReview);
router.delete('/review/:id', authenticated, reviewController.deleteReview);
router.post('/like/:product_id', authenticated, reviewController.createLike);
router.delete('/like/:id', authenticated, reviewController.deleteLike);

export const reviewRoutes = router;