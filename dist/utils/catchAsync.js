import httpStatus from "http-status";
export const catchAsync = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next);
        }
        catch (error) {
            console.log(error);
            const message = error.message;
            const isNotFound = /not found/i.test(message);
            res.status(isNotFound ? httpStatus.NOT_FOUND : httpStatus.INTERNAL_SERVER_ERROR).json({
                success: false,
                statusCode: isNotFound ? httpStatus.NOT_FOUND : httpStatus.INTERNAL_SERVER_ERROR,
                message: message,
                error: message
            });
        }
    };
};
//# sourceMappingURL=catchAsync.js.map