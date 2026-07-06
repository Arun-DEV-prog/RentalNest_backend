import type { Application, Request, Response } from "express";
import express from "express"
import cors from "cors"
import config from "./config";
import { userRoute } from "./modules/users/user.route";






const app:Application= express()

app.use(cors({
     origin: config.app_url,
     Credential: true
}))

 app.get("/", (req:Request, res: Response)=>{
     res.send("server is running")
 })

 app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use("/api/auth",userRoute)

 export default app;
 
