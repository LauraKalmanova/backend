import { Request, Response } from 'express';
import * as authService from '../services/auth.service';

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const user = await authService.login(email, password);
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error.toString());
    }
}

export const logout = async (req: Request, res: Response) => {
    const token = req.headers.authorization.replace('Bearer ', '');
    if (!token) return res.status(400).send('No token provided');

    try {
        await authService.logout(token);
        res.status(200).send('Logged out');
    } catch (error) {
        res.status(500).send('Error logging out');
    }
}
