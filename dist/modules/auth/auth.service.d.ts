import type { ILoginUser } from "./auth.interface";
export declare const AuthService: {
    userlogin: (payload: ILoginUser) => Promise<{
        user: any;
        accessToken: any;
        refresToken: any;
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map