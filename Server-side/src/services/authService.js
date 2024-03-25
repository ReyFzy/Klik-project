import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';

import { smtpConfig } from '../config/smtpConfig';
import { createToken } from '../lib/jwtHandler';

/**
 * 
 * @param {string} password 
 * @param {string} hashedPassword 
 */
export const comparePassword = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword);
}

/**
 * 
 * @param {string} password 
 */
export const hashPassword = (password) => {
    const salt = bcrypt.genSaltSync();

    return bcrypt.hashSync(password, salt);
}

/**
 * 
 * @param {number} length 
 * @returns 
 */
export const generateOTPCode = (length = 6) => {
    const characters = '0123456789';
    let otp = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        otp += characters[randomIndex];
    }

    return otp;
}

/**
 * 
 * @param {
 * id: string
 * name: string
 * email: string
 * } user 
 * @returns 
 */
export const createAccessToken = (user) => {
    return createToken({
        id: user.id,
        name: user.name,
        email: user.email,
    }, {
        expiresIn: "1d"
    });
}

/**
 * 
 * @param {string} email 
 * @param {string} otpCode
 */
export const sendOTPCode = async (email, otpCode) => {
    const transporter = nodemailer.createTransport(smtpConfig);

    await transporter.sendMail({
        from: 'souris.klik@gmail.com',
        to: email,
        subject: 'Klik Verification OTP',
        text: `Your OTP for registration is: ${otpCode}`
    });
}
