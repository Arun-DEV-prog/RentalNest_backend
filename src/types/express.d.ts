import type { usersRole } from "../generated/prisma/enums";

declare global {
  namespace Express {
    interface Request {
      users?: {
        id: string;
        email: string;
        name: string;
        role: usersRole;
      };
    }
  }
}

export {};