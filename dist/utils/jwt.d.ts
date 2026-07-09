import type { JwtPayload, SignOptions } from "jsonwebtoken";
export declare const jwtUtils: {
    createToken: (payload: JwtPayload, secret: string, options: SignOptions) => string;
    verifyToken: (token: string, secret: string) => {
        success: boolean;
        data: JwtPayload;
        error?: never;
    } | {
        success: boolean;
        error: string;
        data?: never;
    };
};
//# sourceMappingURL=jwt.d.ts.map