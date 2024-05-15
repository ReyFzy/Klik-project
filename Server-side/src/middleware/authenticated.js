import jwt from "jsonwebtoken";
import { verifyToken } from "../lib/jwtHandler.js";
import { prisma } from "../lib/prismaClient.js";

export const authenticated = async (req, res, next) => {
    // const token = req.headers.authorization?.split(' ')[1]; // Assuming token is sent in the Authorization header as "Bearer <token>"
    const token = req.cookies.access_token;

    if(!token) return res.status(401).json({message: "Authentication failed: Token not provided"})

    try {
        const user = await verifyToken(token);

        const userIsExist = await prisma.users.findFirst({
            where: {
                id: user.id
            }
        });

        if (!userIsExist) return res.status(403).json({ message: "User is no longer exist" });

        console.log("Authenticated user:", user);

        req.locals.user = user;

        return next()

    } catch (err) {
        if (err instanceof jwt.JsonWebTokenError) return res.status(403).json({ message: err.message })

        return res.status(500).json({ message: "Internal server error" });
    }

}