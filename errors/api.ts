import BaseError from "./error";

export const HttpCodes = {
    OK: 200,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    INTERNAL_SERVER: 500,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401,
    TOO_MANY_REQUESTS: 429,
    UNPROCESSIBLE_ENTITY: 422,
};
export class APIError extends BaseError {
    constructor(httpCode = HttpCodes.INTERNAL_SERVER, message = 'Internal Server Error', name = 'API ERROR') {
        super(name, httpCode, message);
    }
}
