import { Router } from "express";
import { validationMiddleware } from "../middlewares/validation.middleware.js";
import { LoginSchema } from "../schemas/auth/login.schema.js";
import authController from "../controllers/auth.controller.js";
import { RegisterSchema } from "../schemas/auth/register.schema.js";

const authRouter = Router();

authRouter
    .post("/auth/login", validationMiddleware(LoginSchema), authController.login)
    .post("/auth/register", validationMiddleware(RegisterSchema), authController.register)
    .post("/refresh", authController.refresh)

export default authRouter;