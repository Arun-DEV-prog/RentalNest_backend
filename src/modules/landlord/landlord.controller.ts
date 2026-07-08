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

const updatedProperties=catchAsync(async(req: Request, res:Response, next: NextFunction)=>{
     const landLordId= req.users?.id;
     const propertiesId=req.params?.id;
      console.log(propertiesId)
     const payload= req.body;
      const isOwner:boolean=req.users?.role=="landlord";


      const data= await landlordService.updateProperties(landLordId as string, payload,propertiesId as string,isOwner )

      
       sendResponse(res,{
           success: true,
           statusCode: httpStatus.CREATED,
           message:"Properties updated successfully",
           data: data
       })

})

const deletedProperties=catchAsync(async(req:Request, res: Response, next: NextFunction)=>{
       const landLordId= req.users?.id;
        const propertiesId= req.params?.id;
        const isOwner= req.users?.role=="landlord";


        const data= await landlordService.deletePropertiesByID(landLordId as string,propertiesId as string,isOwner)

    
       sendResponse(res,{
           success: true,
           statusCode: httpStatus.CREATED,
           message:"Properties deleted successfully",
           data: null
       })

})


export const landlordController={
     createLandlord,
     updatedProperties,
     deletedProperties
} 