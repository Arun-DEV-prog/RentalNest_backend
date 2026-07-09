import type { NextFunction, Request, Response } from "express";
export declare const catchAsync: (fn: (req: Request, res: Response, next: NextFunction) => Promise<unknown> | unknown) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=catchAsync.d.ts.map