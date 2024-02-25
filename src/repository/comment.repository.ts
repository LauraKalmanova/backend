import {CommentModel} from "../database/models/comment.model";
import {UserModel} from "../database/models/user.model";

export const createComment = async (idArticle, idUser, commentData) => {
    try {
        const user = await UserModel.findById(idUser);
        const userEmail = user.email
        if (!user) {
            throw new Error('User not found');
        }
        const newComment = new CommentModel({idArticle: idArticle, author: userEmail, ...commentData});
        return newComment;
    } catch (error) {
        console.error("Error in createComment repo:", error); // Log the error
        throw new Error("Could not create comment repo: " + error.message); // Re-throw with more specific error message
    }
};

export const getComments = async () => {
    try {
        const comments = await CommentModel.find();
        return comments;
    } catch (error) {
        throw new Error('Could not get comments')
    }
}