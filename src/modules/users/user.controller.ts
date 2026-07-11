import type { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync.js";
import { userService } from "./user.service.js";
import type { RegisterUserPayload } from "./user.interface.js";
import { sendResponse } from "../../utils/sendResponse.js";
import httpStatus from 'http-status';
import { group } from "node:console";




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


const getMe=catchAsync(async(req: Request, res: Response, next: NextFunction)=>{
    
     if(!req.users){
           throw new Error("Your are not logged it , Please login")
      }

      const myInfo= await userService.getMeFromDB(req.users.id)

       sendResponse(res,{
           success: true,
           statusCode: httpStatus.OK,
           message : "User profile fetched successfully",
            data: myInfo
      })

})



export const userController={
     createUser,
     getMe
}

