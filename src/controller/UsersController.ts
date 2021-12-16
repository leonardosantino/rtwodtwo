import { Request, Response } from "express";
import { UsersService } from "../service/UsersService";

export class UsersController{

    async handle(request: Request, response: Response){

        const service = new UsersService();

        const {name, email, admin, password} = request.body;

        const user = await service.execute({name, email, admin, password})       


        return response.json(user)
    }
}