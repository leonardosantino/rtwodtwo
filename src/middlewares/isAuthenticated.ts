import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export function isAuthenticated(request: Request, response: Response, nexFunction: NextFunction) {

    const token = request.headers.authorization

    if (!token) {
        return response.status(401).json({ message: "tokem missing" })
    }

    const [  ,tokenSplit] = token.split(" ")

    verify(tokenSplit, "3afc324d76cb95acbabfb4593bef1eb5")

    return nexFunction();
}