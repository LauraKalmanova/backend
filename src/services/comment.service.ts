import * as commentRepository from "../repository/comment.repository";

export const createComment = async (idArticle, idUser, commentData) => {
    try {
        const newComment = await commentRepository.createComment(idArticle, idUser, commentData);
        return newComment;
    } catch (error) {
        console.error("Error in createComment service:", error); // Log the error
        throw new Error("Could not create comment ser: " + error.message); // Re-throw with more specific error message

    }
}

export const getComments = async () => {
    try {
        return await commentRepository.getComments();
    } catch (error) {
        throw new Error("Could not get comments");
    }
}