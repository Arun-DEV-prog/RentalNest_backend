import type { Application, Request, Response } from "express";
import express from "express"
import cors from "cors"
import config from "./config";
import { userRoute } from "./modules/users/user.route";
import cookieParser from "cookie-parser";
import { authRoute } from "./modules/auth/auth.route";






const app:Application= express()

app.use(cors({
     origin: config.app_url,
     Credential: true
}))

app.use(cookieParser())

 app.get("/", (req:Request, res: Response)=>{
     res.send("server is running")
 })

 app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use("/api/auth",userRoute)
app.use("/api/auth", userRoute)
app.use("/api/auth",authRoute)

 export default app;
 
