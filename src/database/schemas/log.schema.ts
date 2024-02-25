import mongoose from "mongoose";

export const LogSchema = new mongoose.Schema({
    action: {
      type: String,
      required: true
    },
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    content: {
        type: Array,
        required: true
    }
})