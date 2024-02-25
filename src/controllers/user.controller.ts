import {Request, Response} from "express";
import * as userService from "../services/user.service";

export const createUser = async (req: Request, res: Response) => {
        const user = req.body;
        try {
            const newUser = await userService.createUser(user);
            res.status(201).send(newUser);
        } catch (error) {
            res.status(500).send(error.toString());
        }
    }

export const upgradeUser = async (req: Request, res: Response) => {
    try {
        const { idUser } = req.params;
        const updatedUser = await userService.upgradeUser(idUser);
        res.status(200).send(updatedUser);
    } catch (error) {
        throw error
    }
}