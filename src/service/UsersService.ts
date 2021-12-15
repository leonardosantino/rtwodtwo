import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UsersRepository";

interface IUsersRequest{
    name: string;
    email: string;
    admin?: boolean;
}

export class UsersService{

    

    async execute({name, email, admin}: IUsersRequest){

        const repository = getCustomRepository(UserRepository)

        const user = repository.create({
            name,
            email,
            admin
        })

        await repository.save(user)

        return user;
    }
}