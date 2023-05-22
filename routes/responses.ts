export const response = (handler) => async (req, res, next) => {
    try {
        const controllerRes = await handler(req, res, next);
        res.status(200).send(controllerRes);
    } catch (err) {
        const { httpCode, message } = err;
        const code = httpCode || 500;
        console.log(err);
        res.status(code).send({ message: !httpCode ? 'Internal Server Error' : message, code });
    }
};
