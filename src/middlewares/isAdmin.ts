import { Request, Response, NextFunction } from "express";

export function isAdmin(request: Request, response: Response, nextfucntion: NextFunction) {

    const admin = true;

    if (admin) {
        return nextfucntion();
    }
    return response.status(401).json({
        error: "User is not admin"
    })

}