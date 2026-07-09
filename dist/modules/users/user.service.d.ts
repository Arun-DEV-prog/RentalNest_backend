import type { RegisterUserPayload } from "./user.interface";
export declare const userService: {
    registerUserIntoDB: (payload: RegisterUserPayload) => Promise<any>;
    getMeFromDB: (userdId: string) => Promise<any>;
};
//# sourceMappingURL=user.service.d.ts.map