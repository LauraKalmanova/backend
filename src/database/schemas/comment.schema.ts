import mongoose from 'mongoose';

export const CommentSchema = new mongoose.Schema({
    idArticle: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})