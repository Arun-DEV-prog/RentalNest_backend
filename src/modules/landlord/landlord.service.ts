import { time } from "node:console";
import { prisma } from "../../lib/prisma.js"
import type { ILandlord, IUpdatedLandlord } from "./landlord.interface.js"




const createLandlordIntoDB = async(payload: ILandlord, userId: string) => {
     const categoryId= await prisma.category.findUnique({
           where:{
                id: payload.categoriesId
           }
  
     })



              if (!categoryId) {
                      throw new Error("Category not found");
                }


      const result= await prisma.properties.create({
           data:{
               ...payload,
               userId,
               categoriesId: payload.categoriesId
           }
      })  
      
      return result

}


const updateProperties=async(landLordId: string, payload:IUpdatedLandlord,propertiesId: string, isOwner: boolean)=>{
       const properties= await prisma.properties.findUnique({
            where:{
                id:propertiesId
            }
       })

       if(!isOwner && properties?.userId!==landLordId){
           throw new Error("You are not owner tis post")
       }

       const updateProperties= await prisma.properties.update({
           where:{
                id: propertiesId
           },
           data: payload
       })


       return updateProperties;
}

const deletePropertiesByID= async(landLordId: string, propertiesId: string,isOwner: boolean)=>{
      if(!propertiesId){
           throw new Error("Properties id is not provided")
      }

      const properties= await prisma.properties.findUnique({
            where:{
                id: propertiesId
            }
      })

      if(!properties){
           throw new Error("Properties not Found")
      }

      if(!isOwner && properties.userId !==landLordId){
           throw new Error("You are not the Owner")
      }

      const deletedProperties= await prisma.properties.delete({
           where:{
                id:propertiesId
           }
      })


      return deletedProperties
}

const getRentalRequestsForLandlord = async(landLordId: string) => {
     const landlord = await prisma.users.findUnique({
          where: {
               id: landLordId
          }
     })

     if (!landlord) {
          throw new Error("Landlord not found")
     }

     const requests = await prisma.rentalrequest.findMany({
          where: {
               properties: {
                    userId: landLordId
               }
          },
          include: {
               user: {
                    select: {
                         id: true,
                         name: true,
                         email: true,
                         role: true,
                         phone: true,
                         status: true,
                         divison: true,
                         district: true
                    }
               },
               properties: true
          },
          orderBy: {
               created_at: "desc"
          }
     })

     return requests
}

const updateRentalRequestStatus = async(landLordId: string, requestId: string, status: "approved" | "rejected") => {
     // Find the rental request
     const rentalRequest = await prisma.rentalrequest.findUniqueOrThrow({
          where: {
               id: requestId
          },
          include: {
               properties: true
          }
     })

     // Verify the landlord owns the property
     if (rentalRequest.properties.userId !== landLordId) {
          throw new Error("You are not authorized to update this rental request")
     }

     // Update the status
     const updatedRequest = await prisma.rentalrequest.update({
          where: {
               id: requestId
          },
          data: {
               status
          },
          include: {
               user: {
                    select: {
                         id: true,
                         name: true,
                         email: true,
                         role: true,
                         phone: true,
                         status: true,
                         divison: true,
                         district: true
                    }
               },
               properties: true
          }
     })

     return updatedRequest
}


export const landlordService = {
     createLandlordIntoDB,
     updateProperties,
     deletePropertiesByID,
     getRentalRequestsForLandlord,
     updateRentalRequestStatus
}