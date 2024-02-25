import * as commentService from "../services/comment.service";

export const createComment = async (req, res) => {
    try {
        const idArticle = req.params.idArticle
        const idUser = req.params.idUser
        const commentData = req.body;

        const newComment = await commentService.createComment(idArticle, idUser, commentData);
        res.status(201).json(newComment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getComments = async (req, res) => {
    try {
        const comments = await commentService.getComments();
        res.status(201).json(comments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};