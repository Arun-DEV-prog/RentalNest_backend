import jwt from "jsonwebtoken";
const createToken = (payload, secret, options) => {
    const token = jwt.sign(payload, secret, options);
    return token;
};
const verifyToken = (token, secret) => {
    try {
        const verifiedToken = jwt.verify(token, secret);
        return {
            success: true,
            data: verifiedToken
        };
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "Invalid Token";
        return {
            success: false,
            error: message
        };
    }
};
export const jwtUtils = {
    createToken,
    verifyToken
};
//# sourceMappingURL=jwt.js.map