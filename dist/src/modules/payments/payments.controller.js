import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { paymentService } from "./payments.service";
const createPayment = catchAsync(async (req, res, next) => {
    const userId = req.users?.id;
    const { rentalId } = req.body;
    if (!userId) {
        throw new Error("User is required");
    }
    if (!rentalId) {
        throw new Error("Rental ID is required");
    }
    const result = await paymentService.createPaymentCheckout(userId, rentalId);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Payment checkout created successfully",
        data: result,
    });
});
const confirmPayment = catchAsync(async (req, res, next) => {
    const bodySessionId = req.body?.sessionId;
    const bodySessionIdAlt = req.body?.session_id;
    const querySessionId = typeof req.query?.sessionId === "string" ? req.query.sessionId : undefined;
    const querySessionIdAlt = typeof req.query?.session_id === "string" ? req.query.session_id : undefined;
    const sessionId = bodySessionId || bodySessionIdAlt || querySessionId || querySessionIdAlt;
    if (!sessionId) {
        throw new Error("Session ID is required");
    }
    const session = await paymentService.verifyPayment(sessionId);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Payment verified successfully",
        data: {
            sessionId,
            status: session.payment_status,
            paid: session.payment_status === "paid",
        },
    });
});
const getUserPayments = catchAsync(async (req, res, next) => {
    const userId = req.users?.id;
    if (!userId) {
        throw new Error("User is required");
    }
    const result = await paymentService.getUserPayments(userId, req.query);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Payments fetched successfully",
        data: result.data,
        meta: result.pagination,
    });
});
const getPaymentById = catchAsync(async (req, res, next) => {
    const userId = req.users?.id;
    const paymentId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    if (!userId) {
        throw new Error("User is required");
    }
    if (!paymentId) {
        throw new Error("Payment ID is required");
    }
    const payment = await paymentService.getPaymentById(userId, paymentId);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Payment fetched successfully",
        data: payment,
    });
});
export const paymentController = {
    createPayment,
    confirmPayment,
    getUserPayments,
    getPaymentById,
};
//# sourceMappingURL=payments.controller.js.map