import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UsersRepository";

interface IUsersRequest{
    id: string
    name: string;
    email: string;
    admin?: boolean;
}

export class UsersService{

    

    async execute({id , name, email, admin}: IUsersRequest){

        const repository = getCustomRepository(UserRepository)

        const user = repository.create({
            id,
            name,
            email,
            admin
        })

        await repository.save(user)

        return user;
    }
}