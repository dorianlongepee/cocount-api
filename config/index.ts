import dotenv from "dotenv";
dotenv.config();

export default {
    port: process.env.PORT,
    databaseURL: process.env.DATA_BASE_URL,
}