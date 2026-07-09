import type { Application, Request, Response } from "express";
import express from "express"
import cors from "cors"
import config from "./config";
import { userRoute } from "./modules/users/user.route";
import cookieParser from "cookie-parser";
import { authRoute } from "./modules/auth/auth.route";
import { landlordRoute } from "./modules/landlord/landlord.route";
import { rentrequestRoute } from "./modules/rentrequest/rentreq.route";
import { propertiesRoute } from "./modules/properties/properties.route";
import { adminRoute } from "./modules/admin/admin.route";
import { paymentRoute } from "./modules/payments/payments.route";
import { webhookRoute } from "./modules/payments/webhook.route";






const app:Application= express()

app.use(cors({
     origin: config.app_url,
     credentials: true
}))

app.use(cookieParser())

 app.get("/", (req:Request, res: Response)=>{
     res.send("server is running")
 })

app.use("/api/payments/webhook", express.raw({ type: "application/json" }));
app.use("/api/payments", webhookRoute);

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/payment/success", (req: Request, res: Response) => {
    res.status(200).json({ success: true, message: "Payment completed successfully" });
});

app.get("/payment/cancel", (req: Request, res: Response) => {
    res.status(200).json({ success: false, message: "Payment was cancelled" });
});

app.use("/api/auth",userRoute)
app.use("/api/auth", userRoute)
app.use("/api/auth",authRoute)

// Properties
app.use("/api/properties", propertiesRoute)

//Admin
app.use("/api/admin", adminRoute)

//landlord
app.use("/api/landlord",landlordRoute)

//rentRequest
app.use("/api/rentals",rentrequestRoute)

// Payments
app.use("/api/payments", paymentRoute)

 export default app;
 
