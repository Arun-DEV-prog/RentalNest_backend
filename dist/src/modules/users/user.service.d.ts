import type { RegisterUserPayload } from "./user.interface";
import { usersRole } from '../../../generated/prisma/enums';
export declare const userService: {
    registerUserIntoDB: (payload: RegisterUserPayload) => Promise<{
        email: string;
        name: string;
        role: usersRole;
        phone: string;
        status: import("../../../generated/prisma/enums").userStatus;
        divison: string;
        district: string;
        created_at: Date;
        updated_at: Date;
    } | null>;
    getMeFromDB: (userdId: string) => Promise<{
        id: string;
        email: string;
        name: string;
        role: usersRole;
        phone: string;
        status: import("../../../generated/prisma/enums").userStatus;
        divison: string;
        district: string;
        created_at: Date;
        updated_at: Date;
    }>;
};
//# sourceMappingURL=user.service.d.ts.map