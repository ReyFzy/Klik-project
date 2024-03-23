import { prisma } from "../lib/prismaClient.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; 

import { sendOTPEmail, generateOTP } from "./otpMailer.js";

export const authController=({
    register:async (req, res)=>{
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
            await sendOTPEmail(userData.email, otp);
            res.status(200).json({ msg: 'Registration successful. OTP sent to your email.' });
        } catch (error) {
            console.error('Error creating or registering user: ', error);
            res.status(500).json({ error: 'Failed to create or register user' });
        } finally {
            await prisma.$disconnect();
        }
    },
    
    login: async(req,res)=>{
        try {
            const { email, password } = req.body;

            const user = await prisma.user.findUnique({
                where: {
                    email: email
                }
            });
            if(!user){
                return res.status(404).json({ error: 'User not found' });
            }

            const match = bcrypt.compare(password, user.password);
            if (!match) {
                return res.status(401).json({ error: 'Invalid email or password' });
            }

            const otp = await generateOTP();
            await prisma.user.update({
                where: { id: user.id },
                data: { code_otp: otp }
            });
            await sendOTPEmail(email, otp);

            
            const userId = user.id;
            const userEmail = user.email;
            const username = user.username;
            const accessToken = jwt.sign({ userId,userEmail,username }, process.env.ACCESS_TOKEN, { expiresIn: '1d' });
            // res.status(200).json({ accessToken });
            if (!user.isVerified) {
                return res.status(403).json({ error: 'User is not verified' });
            }
        } catch (error) {
            console.error('Error logging in: ', error);
            res.status(500).json({ error: 'Failed to log in' });
        }
    }
})