import type { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { rentRequestService } from "./rentreq.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from 'http-status';
import { use } from "react";



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


const getUserRental=catchAsync(async(req: Request, res: Response, next: NextFunction)=>{
      const userId= req.users?.id;
      const isTentent= req.users?.role==='tentent';


      const data= await rentRequestService.getRentalRqt(userId as string, isTentent);


      sendResponse(res,{
           success: true,
           statusCode: httpStatus.CREATED,
           message:"Successfully get rental",
           data: data
      })
})


export const rentrequestController={
     createRentRuquest,
     getUserRental
}