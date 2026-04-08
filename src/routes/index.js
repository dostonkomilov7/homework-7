import { Router } from "express";
import userRouter from "./users.routes.js";
import postRouter from "./posts.route.js";
import commentRouter from "./comments.route.js";
import likesRouter from "./likes.route.js";
import authRouter from "./auth.route.js";

const apiRouter = Router()

apiRouter.use(authRouter, userRouter, postRouter, commentRouter, likesRouter);

export default apiRouter