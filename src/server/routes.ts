import { Router } from "express";
import { UsersController } from "../controller/UsersController";

export const router = Router()
const createUsers = new UsersController()

router.post("/users", createUsers.handle)