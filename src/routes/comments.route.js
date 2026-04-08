import { Router } from "express";
import commentsController from "../controllers/comments.controller.js";
import { validationMiddleware } from "../middlewares/validation.middleware.js";
import { createCommentSchema } from "../schemas/comments/create-comment.schema.js";

const commentRouter = Router();

commentRouter
    .get("/comments", commentsController.getAllComment)
    .post("/comments", validationMiddleware(createCommentSchema), commentsController.createComment)
    .delete("/comments/:id", commentsController.deleteComment)

export default commentRouter;