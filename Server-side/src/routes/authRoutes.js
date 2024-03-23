import express from 'express'
import { authController } from '../controllers/authController.js';
import { otpVerification } from '../middleware/authMiddleware.js';

const router= express.Router();

router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);
router.post('/auth/login/otp-verif', otpVerification , authController.login)

export const authRoutes=router;