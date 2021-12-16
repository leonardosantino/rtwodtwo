import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UsersRepository";
import {compare} from "bcryptjs";
import {sign} from "jsonwebtoken";

interface IAuthenticateUserRequest{
    email: string,
    password: string
}

export default class AuthenticateUserService {

    async execute({email, password}: IAuthenticateUserRequest){

        const usersRepositories = getCustomRepository(UserRepository)

        const user = await usersRepositories.findOne({email})

        if(!user){
            throw new Error("Email or User incorrect")
        }

        const passwordIscorrect = await compare(password, user.password)

        if(!passwordIscorrect){
            throw new Error("Email or User incorrect")
        }
        const token = sign({
            email: user.email
        }, "3afc324d76cb95acbabfb4593bef1eb5", {
            subject: user.id.toString(),
            expiresIn: "1d"
        })

        return token;
    }
}