import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma.js";
import type { RegisterUserPayload } from "./user.interface.js"
import config from "../../config/index.js";
import { usersRole } from '@prisma/client';


const registerUserIntoDB=async(payload: RegisterUserPayload)=>{
   
    const {name, email,password, phone,divison,district,role }=payload;

    const isUserExits= await prisma.users.findUnique({
           where:{email}
    })

    if(isUserExits){
         throw new Error("user already exits")
    }

    const hashPassword= await bcrypt.hash(password,Number(config.bcrypt_salt_rounds));

    const createUser= await prisma.users.create({
        data: {
           name,
           email,
           password: hashPassword,
           role: role ?? usersRole.tenant,
           phone,
           divison,
           district,
           

        }
    })

   const user = await prisma.users.findUnique({
          where: {
                id: createUser.id,
                email: createUser.email || email
          },
          omit:{
                id: true,
                password: true
          }
   })

   return user;
}


const getMeFromDB= async(userdId: string)=>{
       const user=await prisma.users.findUniqueOrThrow({
             where: {id: userdId},
             omit: {password: true}
             
       })

        return user;
}


export const userService={
     registerUserIntoDB,
     getMeFromDB
}