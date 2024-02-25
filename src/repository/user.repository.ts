import {UserModel} from "../database/models/user.model";
import {CustomError} from "../utils/error.utils";
import {Error} from "mongoose";

export const createUser = async (user) => {
    try {
        const newUser = await UserModel.create(user)
        return newUser
    } catch (e) {
        throw e
    }
}

export const findUserByEmail = async (email) => {
    try {
        const user = await UserModel.findOne({email})
        return user
    } catch (e) {
        throw e
    }
}

export const upgradeUser = async (idUser) => {
    try {
        const user = await UserModel.findById(idUser);

        if (!user) {
            throw new Error("User doesn't exist")
        }

        user.isAdmin = true;
        await user.save();

        return user;
    } catch (error) {
        throw error
    }
}