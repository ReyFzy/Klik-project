import express from "express";
import * as userController from "../controllers/userController.js";
import { uploadAccountPicture } from "../services/multerService.js";
import { authenticated } from "../middleware/authenticated.js"

const router = express.Router();

router.delete('/user/:id', userController.deleteAccount);
router.patch('/user/:id', uploadAccountPicture, authenticated, userController.updateAccount);
router.get('/user/:id', userController.getAccountById);
router.get('/users', userController.getAllAccount);

export const userRoutes = router;