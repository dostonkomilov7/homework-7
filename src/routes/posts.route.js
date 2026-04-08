import { Router } from "express";
import postsController from "../controllers/posts.controller.js";
import { validationMiddleware } from "../middlewares/validation.middleware.js";
import { createPostSchema } from "../schemas/posts/create-post.schema.js";
import { updatePostSchema } from "../schemas/posts/update-post.schema.js";
import { upload } from "../configs/multer.config.js";

const postRouter = Router();

postRouter
    .get("/posts", postsController.getAllPosts)
    .get("/posts/:id", postsController.getSinglePost)
    // .post("/posts", validationMiddleware(createPostSchema), postsController.createPost)
    .post("/posts", upload.fields([
        {name: "image", maxCount: 1},
        {name: "video", maxCount: 1},
        ]),
        postsController.createPost
    )
    .put("/posts/:id", validationMiddleware(updatePostSchema), postsController.updatePost)
    .delete("/posts/:id", postsController.deletePost)

export default postRouter;