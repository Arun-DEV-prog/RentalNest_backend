import { time } from "node:console";
import { prisma } from "../../lib/prisma"
import type { ILandlord } from "./landlord.interface"




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

export const landlordService = {
     createLandlordIntoDB
}