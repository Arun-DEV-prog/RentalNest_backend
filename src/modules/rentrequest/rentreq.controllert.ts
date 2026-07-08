import type { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { rentRequestService } from "./rentreq.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from 'http-status';



const  createRentRuquest= catchAsync(async(req: Request, res: Response, next: NextFunction)=>{
     const payload= req.body;
     const userId= req.users?.id
     const userTentent= req.users?.role=='tentent';
    
     const result= await rentRequestService.createRntRequestIntDB(userId as string, payload, userTentent)


     sendResponse(res,{
         success: true,
         statusCode: httpStatus.CREATED,
         message:"Request submit for Rent",
         data:result
     })
      

})
//const  createRentRuquest= catchAsync(async(req: Request, res: Response, next: NextFunction)=>{

//})



export const rentrequestController={
     createRentRuquest
}