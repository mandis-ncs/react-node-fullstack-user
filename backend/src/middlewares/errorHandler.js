export class ApiError extends Error {
    constructor(statusCode, message) {
        super(message)
        this.statusCode = statusCode
    }
}

function errorHandler(err, req, res, next) {
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({ error: err.message })
    } else {
        return res.status(500).json({ error: 'Internal sever error' })
    }
}

export default errorHandler