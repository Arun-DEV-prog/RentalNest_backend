import type { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { userService } from "./user.service";
import type { RegisterUserPayload } from "./user.interface";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from 'http-status';



const createUser=catchAsync(async(req: Request, res: Response, next: NextFunction)=>{
     const payload = req.body as RegisterUserPayload;

     const user = await userService.registerUserIntoDB(payload);
     

     sendResponse(res,{
           success: true,
           statusCode: httpStatus.CREATED,
           message: " User registered successfully",
           data:user
     })
})



export const userController={
     createUser
}

