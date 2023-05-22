export default class BaseError extends Error {
    private httpCode: number;
    constructor(name, httpCode, message) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);

        this.name = name;
        this.httpCode = httpCode;
        this.message = message;

        Error.captureStackTrace(this);
    }
}