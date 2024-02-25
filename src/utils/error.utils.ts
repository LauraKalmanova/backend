export class CustomError extends Error {
    public statusCode;
    public errCode;
    public translateKey;
    constructor(statusCode = 500, errCode = "ERR-global", translateKey = "global.internalError") {
        super();
        this.name = "CustomError"
        this.statusCode = statusCode;
        this.errCode = errCode;
        this.translateKey = translateKey;

        Object.setPrototypeOf(this, CustomError.prototype);
    }
}

export const sendCustomError = (customError, res) => {
    res.status(customError.statusCode).json({
        code: customError.statusCode,
        errCode: customError.errCode,
        translateKey: customError.translateKey
    })
}
export const sendManualError = (code, errCode, translateKey, res) => {
    res.status(code).json({
            code,
            errCode,
            translateKey
    })
}
export const sendResponse = (code, data, res) => {
    res.status(code).json({
            code,
            data
    })
}

export enum statusCode {
    OK = 200,
    INTERNAL_ERROR = 500
}