import { Router } from "express";
import AuthenticateUserController from "../controller/AuthenticateUserController";
import { UsersController } from "../controller/UsersController";
import { isAdmin } from "../middlewares/isAdmin";


const router = Router()

const createUsers = new UsersController()

const authenticateUserController = new AuthenticateUserController()

router.post("/users", isAdmin, createUsers.handle)
router.post("/authenticate", authenticateUserController.handle)

export default router;