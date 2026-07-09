import type { NextFunction, Request, Response } from "express";
export declare const catchAsync: (fn: RequestHanler) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=catchAsync.d.ts.map