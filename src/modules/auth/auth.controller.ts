import type { Request, Response, NextFunction } from "express";
import { catchAsync } from "../../utils/catchAsync.js";
import { AuthService } from "./auth.service.js";
import type { ILoginUser } from "./auth.interface.js";
import { config } from "dotenv";

import { sendResponse } from "../../utils/sendResponse.js";
import httpStatus from 'http-status';

const userLogin = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
     const payload = req.body as ILoginUser;

     const { accessToken, refresToken } = await AuthService.userlogin(payload);

       res.cookie("accessToken", accessToken,{
           httpOnly: true,
           secure: process.env.NODE_ENV === "production",
           sameSite: process.env.NODE_ENV === "production" ? "none": "lax",
           maxAge: 1000*60*60*24 
       })

       res.cookie("refreshToken", refresToken,{
           httpOnly: true,
           secure: process.env.NODE_ENV === "production",
           sameSite: process.env.NODE_ENV === "production" ? "none": "lax",
           maxAge: 1000*60*60*24*7
       })


       sendResponse(res, {
           success: true,
           statusCode: httpStatus.OK,
           message: "user successfully Login",
           data:{accessToken,refresToken}
       })


});

export const authController = {
     userLogin,
};