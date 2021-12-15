import { Request, Response } from "express";
import { UsersService } from "../service/UsersService";

export class UsersController{

    

    async handle(request: Request, response: Response){

        const service = new UsersService();

        const {name, email, admin} = request.body;

        const user = await service.execute({name, email, admin})       


        return response.json(user)
    }
}