import { NextFunction, Request, Response } from "express";
import { JWT_SECRET } from "./config";
import jwt from "jsonwebtoken";

interface JwtUserPayload {
    userId: string;
}
export function middleware(req: Request, res: Response, next: NextFunction) {
    const token = req.headers["authorization"] ?? "";

    const decoded  = jwt.verify(token, JWT_SECRET) as JwtUserPayload;

    if (decoded) {
        req.userId = decoded.userId;
        next();

    } else {
        res.status(403).json({
            message: "Unauthorized"
        })
    }

}