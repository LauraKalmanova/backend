import {Request, Response} from "express";
export const isAdmin = (req: Request, res: Response, next) => {
    const isAdmin = req.body.isAdmin
    if (isAdmin) {
        next();
    } else {
        res.status(403).json({ error: "Unauthorized" });
    }
};