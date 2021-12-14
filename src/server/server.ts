import express from "express"
import "reflect-metadata"
import "../database/mysql"
import { router } from "./routes";

const app = express();

app.use(express.json())

app.use(router)

app.listen(4000)