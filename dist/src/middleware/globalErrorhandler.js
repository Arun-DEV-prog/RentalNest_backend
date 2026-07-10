import httpStatus from 'http-status';
export const globalErrorHandler = (err, req, res, next) => {
    res.status(err.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        statusCode: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
        message: err.message || "Something went wrong",
        error: err.stack || err,
    });
};
//# sourceMappingURL=globalErrorhandler.js.map