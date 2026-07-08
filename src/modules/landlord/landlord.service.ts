import { time } from "node:console";
import { prisma } from "../../lib/prisma"
import type { ILandlord, IUpdatedLandlord } from "./landlord.interface"




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

export const landlordService = {
     createLandlordIntoDB,
     updateProperties
}