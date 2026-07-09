import { catchAsync } from "../../utils/catchAsync";
import { rentRequestService } from "./rentreq.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from 'http-status';
import { use } from "react";
const createRentRuquest = catchAsync(async (req, res, next) => {
    const payload = req.body;
    const userId = req.users?.id;
    const userTentent = req.users?.role == 'tentent';
    const result = await rentRequestService.createRntRequestIntDB(userId, payload, userTentent);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Request submit for Rent",
        data: result
    });
});
const getUserRental = catchAsync(async (req, res, next) => {
    const userId = req.users?.id;
    const isTentent = req.users?.role === 'tentent';
    const data = await rentRequestService.getRentalRqt(userId, isTentent);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Successfully get rental",
        data: data
    });
});
const getRentRuquestID = catchAsync(async (req, res, next) => {
    const userId = req.users?.id;
    const rentId = req.params?.id;
    const isTentent = req.users?.role === 'tentent';
    const data = await rentRequestService.getRentRqtById(userId, rentId, isTentent);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Successfully get Single rental",
        data: data
    });
});
export const rentrequestController = {
    createRentRuquest,
    getUserRental,
    getRentRuquestID
};
//# sourceMappingURL=rentreq.controllert.js.map