import morgan from "morgan";
import http from "http";
import helmet from "helmet";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoSanitize from "express-mongo-sanitize";
import {router} from "./routes";
import {connect} from "./db/mongo";
import {secrets} from "./config/secrets.enum";

// App configuration and security middlewares setup
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(helmet());
// Sanitize mongo queries to prevent NoSQL injections
app.use(
    mongoSanitize({
        replaceWith: '_sanitized_',
    })
);
app.use(morgan('dev'));

app.use('/api/v1', router);

// Catch all errors that are not handled
app.use((err, req, res, next) => {
    if (err.statusCode !== 401) {
        console.log(err);
        res.status(500).send({ message: 'Internal Server Error', code: 500 });
        next();
        return;
    }
    res.status(err.statusCode || 500).send({
        message: err.message,
        code: err.statusCode || 500,
    });
    next();
});

const port = process.env.PORT || 8080;

export const server = http.createServer(app);

connect(secrets.MONGODB_URI).then(async () => {
    server.listen(port, () => {
        console.log(`listening on server port ${port}`);
    });
});