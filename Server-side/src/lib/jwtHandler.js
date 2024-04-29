import jwt from 'jsonwebtoken';
import { jwtConfig } from '../config/jwtConfig.js';

export const createToken = (payload, options = {}) => {
    return jwt.sign(payload, jwtConfig.secretKey, options)
}

export const verifyToken = (token) => {
    return new Promise((resolve, rejected) => {
        jwt.verify(token, jwtConfig.secretKey, (err, decoded) => {
            if (err) rejected(err);

            resolve(decoded);
        });
    });
}