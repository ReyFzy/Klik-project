import express from 'express'

import * as authController from '../controllers/authController.js';

const router = express.Router();

router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);
router.post('/auth/verify-user/:email', authController.verifyUser);
router.post('/auth/logout', authController.logout);

export const authRoutes = router;