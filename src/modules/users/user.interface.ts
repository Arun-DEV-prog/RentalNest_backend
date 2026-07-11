import type { usersRole } from "../../../generated/prisma/enums.js";

export interface RegisterUserPayload {
    id?: string,
    name: string,
    email: string,
    password: string,
    phone: string,
    role?: usersRole,
    divison: string,
    district: string
}