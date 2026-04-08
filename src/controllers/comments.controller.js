import { Comment } from "../models/coments.model.js";

class CommentController {
    #_commentModel;
    constructor() {
        this.#_commentModel = Comment
    }

    getAllComment = async (req, res) => {
        const comments = await this.#_commentModel.find();

        res.send({
            success: true,
            comments
        });
    }


    createComment = async (req, res) => {
        const {text, post_id, user_id} = req.body;

        await this.#_commentModel.insertOne({
            text,
            post_id,
            user_id
        });

        res.status(201).send({
            success: true,
            message: "Sucessfully created"
        });
    }

    deleteComment = async (req, res) => {
        const {id} = req.params;

        await this.#_commentModel.deleteOne({_id: id});

        res.status(200).send({
            success: true,
            message: "Sucessfully deleted"
        });
    }
}

export default new CommentController();