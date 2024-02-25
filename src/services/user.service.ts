import * as userRepository from '../repository/user.repository';
import * as jwtUtils from '../utils/jwt.utils';

export const createUser = async (user) => {

    const isExistingUser = await userRepository.findUserByEmail(user.email);
    if (isExistingUser) throw new Error('User already exists')

    user.password = jwtUtils.hashPassword(user.password);
    try {
        const newUser = await userRepository.createUser(user);
        return newUser;
    }
    catch (error) {
        throw error;
    }
}

export const findUserByEmail = async (email) => {
    try {
        const user = await userRepository.findUserByEmail(email);
        return user;
    }
    catch (error) {
        throw error;
    }
}


export const upgradeUser = async (idUser) => {
    try {
        const upgradedUser = await userRepository.upgradeUser(idUser)

        return upgradedUser;
    } catch (error) {
        throw new Error
    }
}