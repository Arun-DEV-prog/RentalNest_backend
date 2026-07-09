import { catchAsync } from "../../utils/catchAsync";
import { AuthService } from "./auth.service";
import { config } from "dotenv";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from 'http-status';
const userLogin = catchAsync(async (req, res, next) => {
    const payload = req.body;
    const { accessToken, refresToken } = await AuthService.userlogin(payload);
    res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        maxAge: 1000 * 60 * 60 * 24
    });
    res.cookie("refreshToken", refresToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        maxAge: 1000 * 60 * 60 * 24 * 7
    });
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "user successfully Login",
        data: { accessToken, refresToken }
    });
});
export const authController = {
    userLogin,
};
//# sourceMappingURL=auth.controller.js.map