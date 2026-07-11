import type { Application, NextFunction, Request, Response } from "express";
import express from "express"
import cors from "cors"
import config from "./config/index.js";
import { userRoute } from "./modules/users/user.route.js";
import cookieParser from "cookie-parser";
import { authRoute } from "./modules/auth/auth.route.js";
import { landlordRoute } from "./modules/landlord/landlord.route.js";
import { rentrequestRoute } from "./modules/rentrequest/rentreq.route.js";
import { propertiesRoute } from "./modules/properties/properties.route.js";
import { adminRoute } from "./modules/admin/admin.route.js";
import { paymentRoute } from "./modules/payments/payments.route.js";
import { webhookRoute } from "./modules/payments/webhook.route.js";
import { reviewRoute } from "./modules/reviews/reviews.route.js";
import { paymentService } from "./modules/payments/payments.service.js";
import { globalErrorHandler } from "./middleware/globalErrorhandler.js";






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


app.get("/payment/success", async (req: Request, res: Response) => {
    const sessionId = typeof req.query.session_id === "string"
        ? req.query.session_id
        : typeof req.query.sessionId === "string"
            ? req.query.sessionId
            : undefined;

    if (sessionId) {
        try {
            const session = await paymentService.verifyPayment(sessionId);
            return res.status(200).json({
                success: true,
                message: "Payment completed successfully",
                data: {
                    sessionId,
                    status: session.payment_status,
                    paid: session.payment_status === "paid",
                },
            });
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: error instanceof Error ? error.message : "Payment verification failed",
            });
        }
    }

    return res.status(200).json({ success: true, message: "Payment completed successfully" });
});

app.get("/payment/cancel", (req: Request, res: Response) => {
    res.status(200).json({ success: false, message: "Payment was cancelled" });
});

app.use("/api/auth",userRoute)
//app.use("/api/auth", userRoute)
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

// Reviews
app.use("/api/reviews", reviewRoute)

app.use((req: Request, res: Response, next: NextFunction) => {
    const error: any = new Error(`Route ${req.originalUrl} not found`);
    error.statusCode = 404;
    next(error);
});

app.use(globalErrorHandler)

 export default app;
 
