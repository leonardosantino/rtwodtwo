import {Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm";

@Entity("users")
export class Users {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    admin: boolean;

    @CreateDateColumn()
    create_at: Date;
}