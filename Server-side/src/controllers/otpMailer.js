import nodemailer from "nodemailer";
import { mailerConfig } from "../config/mailerConfig.js";

export async function sendOTPEmail(email, otp) {
    try {
        // Konfigurasi transporter Node Mailer
        const transporter = nodemailer.createTransport(mailerConfig);

        // Kirim email
        await transporter.sendMail({
            from: 'souris.klik@gmail.com',
            to: email,
            subject: 'Klik Verification OTP',
            text: `Your OTP for registration is: ${otp}`
        });

        console.log('OTP email sent successfully');
    } catch (error) {
        console.error('Error sending OTP email:', error);
        throw new Error('Failed to send OTP email');
    }
}

export async function generateOTP(length = 6) {
    const characters = '0123456789';
    let otp = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        otp += characters[randomIndex];
    }
    return otp;
}
