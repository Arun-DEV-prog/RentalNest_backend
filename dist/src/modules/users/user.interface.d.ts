import type { usersRole } from "../../../generated/prisma/enums";
export interface RegisterUserPayload {
    id?: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    role?: usersRole;
    divison: string;
    district: string;
}
//# sourceMappingURL=user.interface.d.ts.map