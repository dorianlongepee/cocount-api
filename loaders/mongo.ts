import * as mongoose from 'mongoose'
import config from "../config";
export default async () => {
    mongoose.set('strictQuery', true);
    return mongoose.connect(config.databaseURL);
};