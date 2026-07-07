import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma";
import type { ILoginUser } from "./auth.interface"
import { jwtUtils } from "../../utils/jwt";
import config from "../../config";
;




const userlogin=async(payload: ILoginUser)=>{
        const {email,password}=payload;

        const user=await prisma.users.findUniqueOrThrow({
          where:{email}
        })


        if(!user){
           throw new Error("user not found!")
        }

        const isPasswordMatch= await bcrypt.compare(password, user.password);

        if(!isPasswordMatch){
           throw new Error("Sorry,Password not Matched!")
        }


        const jwtPayload={
           id: user.id,
           email: user.email,
           role: user.role,
           name: user.name
        }

        const accessToken = jwtUtils.createToken(
          jwtPayload,
          config.jwt_access_secret as string,
          { expiresIn: config.jwt_access_expires_in }
       )

       const refresToken = jwtUtils.createToken(
          jwtPayload,
          config.jwt_refresh_secret as string,
          { expiresIn: config.jwt_refresh_expires_in }
       )

       return {
           user,
           accessToken,
           refresToken
       }
}


export const AuthService={
     userlogin
}