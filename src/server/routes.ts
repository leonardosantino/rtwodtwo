import { Router } from "express";
import { UsersController } from "../controller/UsersController";
import { isAdmin } from "../middlewares/isAdmin";

export const router = Router()
const createUsers = new UsersController()

router.post("/users", isAdmin, createUsers.handle)