import loaders from "./loaders";
import express from "express";
import config from "./config";

async function startServer() {

    const app = express();

    await loaders({ expressApp: app });

    app.listen(config.port, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(`Your server is ready on port ${config.port}`);
    });
}

startServer();