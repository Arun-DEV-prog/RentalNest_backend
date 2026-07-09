import { prisma } from "../../lib/prisma"
import type { IRentRuquest } from "./rentreq.interface"
import { usersRole } from '../../../generated/prisma/enums';



const createRntRequestIntDB=async(userId: string, payload: IRentRuquest, isTentent: boolean)=>{

    const userfind = await prisma.users.findUniqueOrThrow({
        where: {
            id: userId
        }
    })

    if (userfind.role!== "tenant") {
        throw new Error("You are not permitted to rent!")
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


     const rentRqt = await prisma.rentalrequest.create({
        data: {
            move_in_date: payload.move_in_date,
            lease_duration: payload.lease_duration,
            userId,
            properties_id: payload.propertisId
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
            }
        }
    })

    return rentRqt;

}

const getRentalRqt=async(userId: string,isTentent: boolean)=>{
      const user= await prisma.users.findUnique({
         where:{
             id: userId
         }
      })

      if (!user) {
         throw new Error("User not found")
      }

      if(!isTentent && user.role !=="tenant"){
         throw new Error("You have no permission!")
      }
      
      const request = await prisma.rentalrequest.findMany({
         where: {
            userId
        },
        include:{
             properties: true,
             
        }
      })
  return request

}

const getRentRqtById=async(userId: string, rentId: string, isOwner: boolean)=>{
     
    const userfind = await prisma.users.findUniqueOrThrow({
        where: {
            id: userId
        }
    })

    if (userfind.role!== "tenant") {
        throw new Error("You are not permitted to rent!")
    }



     if(!rentId){
         throw new Error("This rentId not found!")
    }

    const rental= await prisma.rentalrequest.findUniqueOrThrow({
         where: {
           id:  rentId,
         },
        
        
    })


   

    return rental;
   



}



export const rentRequestService={
     createRntRequestIntDB,
     getRentalRqt,
     getRentRqtById
}