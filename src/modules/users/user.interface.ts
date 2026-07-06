import type { usersRole } from "../../../generated/prisma/enums";

export interface RegisterUserPayload{
    id?: string,
    name: string,
    email: string,
    password: string,
    phone: string,
    
    divison: string,
    district: string
}