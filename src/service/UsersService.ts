import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UsersRepository";
import {hash} from "bcryptjs";

interface IUsersRequest{
    name: string;
    email: string;
    password: string;
    admin?: boolean;
}

export class UsersService{

    async execute({name, email, password, admin}: IUsersRequest){

        const repository = getCustomRepository(UserRepository)

        const passwordhash = await hash(password, 8)

        const user = repository.create({
            name,
            email,
            password: passwordhash,
            admin
        })

        await repository.save(user)

        return user;
    }
}