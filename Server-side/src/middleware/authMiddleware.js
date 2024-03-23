import { prisma } from "../lib/prismaClient.js";

export async function otpVerification(req, res, next){
    try{    
        const { otp } = req.body;
        const userId = req.cookies.userId;
        const user = await prisma.user.findUnique({
            where: { id: userId }
        });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        if (!user.isVerified && user.code_otp === otp) {
            await prisma.user.update({
                where: { id: userId },
                data: { isVerified: true }
            });
            next();
        } else {
            return res.status(403).json({ error: 'Invalid OTP or User already verified' });
        }
    } catch (error) {
        console.error('Error verifying OTP: ', error);
        return res.status(500).json({ error: 'Failed to verify OTP' });
    }
}