import httpStatus from 'http-status';
export const golbalErrorHandler = ((err, req, res, next) => {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        statusCode: httpStatus.INTERNAL_SERVER_ERROR,
        message: err.message,
        error: err.stack
    });
});
//# sourceMappingURL=globalErrorhandler.js.map