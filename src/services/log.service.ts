import * as logRepository from "../repository/log.repository";

export const createLog = async (log)=> {

    try {
        return await logRepository.createLog(log)

    } catch (error) {
        throw error
    }
}