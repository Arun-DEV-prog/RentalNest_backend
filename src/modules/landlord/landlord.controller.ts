import type { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { landlordService } from "./landlord.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from 'http-status';


const createLandlord=catchAsync(async(req: Request, res: Response, next:NextFunction)=>{
       const userId= req.users?.id;
       console.log(req.users?.id)
       const payload= req.body;

       const properties= await landlordService.createLandlordIntoDB(payload,userId as string)

       sendResponse(res,{
           success: true,
           statusCode: httpStatus.CREATED,
           message:"Properties created successfully",
           data: properties
       })

})


export const landlordController={
     createLandlord
} 