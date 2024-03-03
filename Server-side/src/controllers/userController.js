import { prisma } from "../lib/prismaClient.js";
import bcrypt from "bcrypt";
import { sendOTPEmail, generateOTP } from "./otpMailer.js";

export async function Register(req, res){
    try {
        const userData = req.body;
        const salt = await bcrypt.genSalt();
        const hashPass = await bcrypt.hash(userData.password , salt);
        const otp = await generateOTP();
        const newUser = await prisma.user.create({
            data: { 
                email: userData.email,
                password: hashPass,
                name: userData.name,
                username: userData.username,
                no_telp: userData.no_telp,
                gender: userData.gender,
                tgl_lahir: new Date(userData.tgl_lahir).toISOString(),
                role: userData.role,
                code_otp: otp,
                isVerifed: false
            }
        });
        console.log(userData.id)
        console.log(newUser);
        await sendOTPEmail(userData.email, otp);
        res.status(200).json({ msg: 'Registration successful. OTP sent to your email.' });
    } catch (error) {
        console.error('Error creating or registering user: ', error);
        res.status(500).json({ error: 'Failed to create or register user' });
    } finally {
        await prisma.$disconnect();
    }
}
