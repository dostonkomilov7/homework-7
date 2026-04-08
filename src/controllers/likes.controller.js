import { Like } from "../models/likes.model.js";

class LikeController {
    #_likeModel;
    constructor() {
        this.#_likeModel = Like
    }

    createLike = async (req, res) => {
        const {id: post_id} = req.params;
        const {user_id} = req.body;

        await this.#_likeModel.insertOne({
            post_id,
            user_id
        });

        res.status(201).send({
            success: true,
            message: "Sucessfully created"
        });
    }

    deleteLike = async (req, res) => {
        const {id} = req.params;

        await this.#_likeModel.deleteOne({_id: id});

        const count = this.#_likeModel

        res.status(200).send({
            success: true,
            message: "Sucessfully deleted"
        });
    }
}

export default new LikeController();