import {LogModel} from "../database/models/log.model";

export const createLog = async (log) => {
    try {
        const logs = await LogModel.create(log)

        return logs
    } catch (e) {
        throw e
    }
}