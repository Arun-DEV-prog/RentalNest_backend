import { prisma } from "../../lib/prisma"
import type { IRentRuquest } from "./rentreq.interface"



const createRntRequestIntDB=async(userId: string, payload: IRentRuquest, isTentent: boolean)=>{

     const userfind = await prisma.users.findUniqueOrThrow({
         where:{
             id: userId
         }
     })

     if(!isTentent && userfind.role !=="tenant"){
         throw new Error("You are not permission of rent!")
     }

     if(!payload.propertisId){
         throw new Error("Property id is required")
     }

     const property = await prisma.properties.findUnique({
          where:{
             id: payload.propertisId
          }
     })

     if(!property){
         throw new Error("Property not found")
     }

     if(property.availability==false){
         throw new Error("Not avaiable now!")
     }


     const  rentRqt= await prisma.rentalrequest.create({
         
            data:{
                move_in_date: payload.move_in_date,
                lease_duration: payload.lease_duration,
                userId,
                properties_id: payload.propertisId

            },
     })


     return rentRqt;

}


export const rentRequestService={
     createRntRequestIntDB
}