import type { ILoginUser } from "./auth.interface";
export declare const AuthService: {
    userlogin: (payload: ILoginUser) => Promise<{
        user: {
            id: string;
            email: string;
            name: string;
            password: string;
            role: import("../../../generated/prisma/enums").usersRole;
            phone: string;
            status: import("../../../generated/prisma/enums").userStatus;
            divison: string;
            district: string;
            created_at: Date;
            updated_at: Date;
        };
        accessToken: string;
        refresToken: string;
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map