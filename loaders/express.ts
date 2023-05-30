import morgan from "morgan";
import helmet from "helmet";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoSanitize from "express-mongo-sanitize";
import bodyParser from "body-parser";
import {router} from "../api";
import apiErrorHandler from "../error/api-error-handler";

export default async ({app}: { app: express.Application }) => {

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

  app.use(apiErrorHandler)

  return app;
}