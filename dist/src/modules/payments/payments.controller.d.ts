import type { NextFunction, Request, Response } from "express";
export declare const paymentController: {
    createPayment: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    confirmPayment: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getUserPayments: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getPaymentById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
};
//# sourceMappingURL=payments.controller.d.ts.map