import type { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync.js";
import { landlordService } from "./landlord.service.js";
import { sendResponse } from "../../utils/sendResponse.js";
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

const getRentalRequests=catchAsync(async(req: Request, res: Response, next: NextFunction)=>{
    const landLordId = req.users?.id as string;

    const requests = await landlordService.getRentalRequestsForLandlord(landLordId);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Rental requests fetched successfully",
        data: requests
    })
})

const approveOrRejectRequest=catchAsync(async(req: Request, res: Response, next: NextFunction)=>{
    const landLordId = req.users?.id as string;
    const requestId = req.params?.id as string;
    const { status } = req.body;

    // Validate status
    if (!status || !["approved", "rejected"].includes(status)) {
        throw new Error("Status must be either 'approved' or 'rejected'")
    }

    const updatedRequest = await landlordService.updateRentalRequestStatus(
        landLordId,
        requestId,
        status as "approved" | "rejected"
    );

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: `Rental request ${status} successfully`,
        data: updatedRequest
    })
})


export const landlordController={
     createLandlord,
     updatedProperties,
     deletedProperties,
     getRentalRequests,
     approveOrRejectRequest
} 