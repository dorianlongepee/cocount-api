import ApiError from "./ApiError";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function apiErrorHandler(err, req, res, next) {
    console.error(err);

    if (err instanceof ApiError) {
        res.status(err.code).json(err.message);
        return
    }

    res.status(500).json('Something went wrong');
}