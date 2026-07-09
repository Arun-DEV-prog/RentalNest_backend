import { catchAsync } from "../../utils/catchAsync";
import { userService } from "./user.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from 'http-status';
import { group } from "node:console";
const createUser = catchAsync(async (req, res, next) => {
    const payload = req.body;
    const user = await userService.registerUserIntoDB(payload);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: " User registered successfully",
        data: user
    });
});
const getMe = catchAsync(async (req, res, next) => {
    if (!req.users) {
        throw new Error("Your are not logged it , Please login");
    }
    const myInfo = await userService.getMeFromDB(req.users.id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "User profile fetched successfully",
        data: myInfo
    });
});
export const userController = {
    createUser,
    getMe
};
//# sourceMappingURL=user.controller.js.map