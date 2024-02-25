import * as jwtUtils from '../utils/jwt.utils';
import * as userService from './user.service';

export const login = async (email, password) => {
    try {
        const user = await userService.findUserByEmail(email);
        if (!user) throw new Error('User not found');

        const isPasswordCorrect = jwtUtils.comparePassword(password, user.password);
        if (!isPasswordCorrect) throw new Error('Incorrect password');

        const accessToken = jwtUtils.generateAccessToken({ email: email });
        const refreshToken = await jwtUtils.generateRefreshToken({ email: email });
        return { accessToken, refreshToken };
    } catch (error) {
        throw error
    }
}

export const logout = async (token: string) => {
    try {
        // add token to blacklist
    } catch (error) {
        throw error;
    }
}