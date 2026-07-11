import type { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync.js";
import { rentRequestService } from "./rentreq.service.js";
import { sendResponse } from "../../utils/sendResponse.js";
import httpStatus from 'http-status';

const  createRentRuquest= catchAsync(async(req: Request, res: Response, next: NextFunction)=>{
     const payload= req.body;
     const userId= req.users?.id
     const userTentent= req.users?.role=='tenant';
    
     const result= await rentRequestService.createRntRequestIntDB(userId as string, payload, userTentent)


     sendResponse(res,{
         success: true,
         statusCode: httpStatus.CREATED,
         message:"Request submit for Rent",
         data:result
     })
      

})



const getUserRental=catchAsync(async(req: Request, res: Response, next: NextFunction)=>{
      const userId= req.users?.id;
      const isTentent= req.users?.role==='tenant';


      const data= await rentRequestService.getRentalRqt(userId as string, isTentent);


      sendResponse(res,{
           success: true,
           statusCode: httpStatus.CREATED,
           message:"Successfully get rental",
           data: data
      })
})

const  getRentRuquestID= catchAsync(async(req: Request, res: Response, next: NextFunction)=>{
    const userId= req.users?.id;
    const rentId= req.params?.id;
    const isTentent= req.users?.role==='tenant';


     const data= await rentRequestService.getRentRqtById(userId as string, rentId as string, isTentent as boolean);


      sendResponse(res,{
           success: true,
           statusCode: httpStatus.CREATED,
           message:"Successfully get Single rental",
           data: data
      })



})


export const rentrequestController={
     createRentRuquest,
     getUserRental,
     getRentRuquestID
}