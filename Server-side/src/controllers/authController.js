import { prisma } from "../lib/prismaClient.js";
import * as authService from '../services/authService.js';

export const register = async (req, res) => {
    try {
        const registerDTO = req.body;

        const user = await prisma.user.findFirst({
            where: {
                OR: [
                    { username: { equals: registerDTO.username } },
                    { email: { equals: registerDTO.email } }
                ]
            }
        });

        if (user) return res.status(400).json({ message: "User is already exist" });

        const hashedPassword = authService.hashPassword(register.password);
        const otpCode = authService.generateOTPCode();

        await prisma.user.create({
            data: {
                email: registerDTO.email,
                password: hashedPassword,
                name: registerDTO.name,
                username: registerDTO.username,
                no_telp: registerDTO.no_telp,
                gender: registerDTO.gender,
                tgl_lahir: new Date(registerDTO.tgl_lahir).toISOString(),
                role: registerDTO.role,
                code_otp: otpCode,
            }
        });

        await authService.sendOTPCode(registerDTO.email, otpCode);
        await prisma.$disconnect();

        return res.status(200).json({ message: "User registered" });
    } catch {
        console.error('Error while registering user: ', error);

        res.status(500).json({ message: 'Internal server error' });
    }
}

export const verifyUser = async (req, res) => {
    try {
        const { email } = req.params;
        const { otp_code } = req.body;

        const user = await prisma.user.findFirst({
            where: {
                email: {
                    equals: email
                }
            }
        });

        if (!user) return res.status(404).json({ message: 'User not found' });

        const otpIsValid = user.code_otp === otp_code;

        if (!otpIsValid) return res.status(400).json({ message: 'Invalid otp code' });

        await prisma.user.update({
            where: { id: user.id },
            data: { isVerified: true }
        });

        await prisma.$disconnect();

        return res.status(202).json({ message: "Success to verifying user" });
    } catch (err) {
        console.error('Error while verifying users: ', err);

        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if (!user) return res.status(404).json({ message: 'User not found' });

        if (!user.isVerified) {
            const otpCode = authService.generateOTPCode();

            await authService.sendOTPCode(user.email, otpCode);

            return res.status(403).json({ message: "User is not verified" })
        };

        const passwordIsValid = authService.comparePassword(password, user.password);

        if (!passwordIsValid) return res.status(400).json({ message: 'Invalid password' });

        await prisma.$disconnect();

        const accessToken = authService.createAccessToken(user);

        res.cookie('access_token', accessToken, {
            path: "/",
            sameSite: "strict",
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });

        return res.status(200).json({ accessToken });
    } catch (err) {
        console.error('Error while login: ', err);

        return res.status(500).json({ message: "Internal server error" });
    }
}