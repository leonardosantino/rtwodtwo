import { Request, Response } from "express";
import AuthenticateUserService from "../service/AuthenticateUserService";

export default class AuthenticateUserController {

    async handle(request: Request, response: Response){
        const {email, password} = request.body

        const service = new AuthenticateUserService();

        const token = await service.execute({
            email,
            password
        })

        return response.json(token);
    }
}