import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';

import { smtpConfig } from '../config/smtpConfig.js';
import { createToken } from '../lib/jwtHandler.js';

/**
 * 
 * @param {string} password 
 * @param {string} hashedPassword 
 */
export const comparePassword = (password, hashedPassword) => {
    console.log('Password:', password);
    console.log('Hash:', hashedPassword);
    return bcrypt.compareSync(password, hashedPassword);
}

/**
 * 
 * @param {string} password 
 */
export const hashPassword =(password)=> {
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
        username: user.username,
        email: user.email
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
        // text: `Your OTP for registration is: ${otpCode}`
        html: `
        <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
            <div style="margin:50px auto;width:70%;padding:20px 0">
            <div style="border-bottom:1px solid #eee">
                <a href="" style="font-size:1.4em;color: #10B981;text-decoration:none;font-weight:600">Klik.</a>
            </div>
            <p style="font-size:1.1em">Hi,${email}</p>
            <p>Thank you for choosing Klik. Use the following OTP to complete your Sign Up procedures. OTP is valid for 5 minutes</p>
            <h2 style="background: #10B981;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otpCode}</h2>
            <p style="font-size:0.9em;">Rey,<br />Klik.</p>
            <hr style="border:none;border-top:1px solid #eee" />
            <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
                <p>Souris.Klik</p>
                <p>SMKN 2 BANDUNG</p>
                <p>Indonesian</p>
            </div>
            </div>
        </div>
        `
    });
}
