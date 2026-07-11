import type { NextFunction, Request, Response } from "express";
import type { usersRole } from "@prisma/client";
import { catchAsync } from "../utils/catchAsync.js";
import { jwtUtils } from "../utils/jwt.js";
import config from "../config/index.js";
import type { JwtPayload } from "jsonwebtoken";
import { prisma } from "../lib/prisma.js";



export const auth=(...requireRoles: usersRole[])=>{
      return catchAsync(async(req: Request, res: Response, next:NextFunction)=>{
          const authHeader:any = req.headers.authorization;

          const tokenFromHeader= authHeader?.startsWith("Bearer ")
                ? authHeader.slice(7).trim()
                : authHeader

         const token= req.cookies?.accessToken || tokenFromHeader;


          if(!token){
             throw new Error ("You ar not loggin in, Please login to access")
          }


          const verifyToken= jwtUtils.verifyToken(token, config.jwt_access_secret as string);
            

          if(!verifyToken.success || !verifyToken.data){
             throw new Error("Invalid or expired Token");
          }

          const { email, name, id } = verifyToken.data as JwtPayload;

          if (!id || !email || !name) {
             throw new Error("Invalid token payload");
          }

          const user = await prisma.users.findUnique({
             where:{
                 id: String(id)
             }
          })



           if(!user){
      throw new Error("Not found")
    }

    const normalizedRole = String(user.role ?? "").toLowerCase() as usersRole;
    const normalizedRequiredRoles = requireRoles.map((item) => String(item).toLowerCase()) as usersRole[];

    if(!normalizedRequiredRoles.includes(normalizedRole)){
      throw new Error("Forbidden")
    }

   

    req.users = {
      email: user.email,
      name: user.name,
      id: user.id,
      role: normalizedRole,
    };

    next();

      })
}