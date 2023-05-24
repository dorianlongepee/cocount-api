import morgan from "morgan";
import helmet from "helmet";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoSanitize from "express-mongo-sanitize";
import bodyParser from "body-parser";
import {router} from "../api";

export default async ({ app }: {app:express.Application}) => {

    // App configuration and security middlewares setup
    app.use(express.json());
    app.use(bodyParser.urlencoded({extended: true}));
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
            res.status(500).send({message: 'Internal Server Error', code: 500});
            next();
            return;
        }
        res.status(err.statusCode || 500).send({
            message: err.message,
            code: err.statusCode || 500,
        });
        next();
    });

    return app;
}