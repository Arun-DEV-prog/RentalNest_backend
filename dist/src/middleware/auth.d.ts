import type { NextFunction, Request, Response } from "express";
import type { usersRole } from "../../generated/prisma/enums";
export declare const auth: (...requireRoles: usersRole[]) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=auth.d.ts.map