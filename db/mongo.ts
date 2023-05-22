import mongoose from "mongoose";

export const connect = async (connectionURI) => {
    mongoose.set('strictQuery', true);
    return mongoose.connect(connectionURI || process.env.MONGODB_URI);
};

export const disconnect = async () => mongoose.disconnect();
