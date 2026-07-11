import type { usersRole } from "@prisma/client";

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