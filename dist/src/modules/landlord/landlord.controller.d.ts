import type { NextFunction, Request, Response } from "express";
export declare const landlordController: {
    createLandlord: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updatedProperties: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deletedProperties: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getRentalRequests: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    approveOrRejectRequest: (req: Request, res: Response, next: NextFunction) => Promise<void>;
};
//# sourceMappingURL=landlord.controller.d.ts.map