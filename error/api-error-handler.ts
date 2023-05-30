import ApiError from "./ApiError";

export default function apiErrorHandler(err, req, res) {
    console.error(err);

    if (err instanceof ApiError) {
        res.status(err.code).json(err.message);
        return
    }

    res.status(500).json('Something went wrong');
}