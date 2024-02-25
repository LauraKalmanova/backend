import mongoose from "mongoose";
import {LogSchema} from "../schemas/log.schema";



export const LogModel = mongoose.model('logs', LogSchema)