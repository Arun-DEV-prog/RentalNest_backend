import { catchAsync } from "../utils/catchAsync";
import { jwtUtils } from "../utils/jwt";
import config from "../config";
import { prisma } from "../lib/prisma";
export const auth = (...requireRoles) => {
    return catchAsync(async (req, res, next) => {
        const authHeader = req.headers.authorization;
        const tokenFromHeader = authHeader?.startsWith("Bearer ")
            ? authHeader.slice(7).trim()
            : authHeader;
        const token = req.cookies?.accessToken || tokenFromHeader;
        if (!token) {
            throw new Error("You ar not loggin in, Please login to access");
        }
        const verifyToken = jwtUtils.verifyToken(token, config.jwt_access_secret);
        if (!verifyToken.success || !verifyToken.data) {
            throw new Error("Invalid or expired Token");
        }
        const { email, name, id } = verifyToken.data;
        if (!id || !email || !name) {
            throw new Error("Invalid token payload");
        }
        const user = await prisma.users.findUnique({
            where: {
                id: String(id)
            }
        });
        if (!user) {
            throw new Error("Not found");
        }
        const normalizedRole = String(user.role ?? "").toLowerCase();
        const normalizedRequiredRoles = requireRoles.map((item) => String(item).toLowerCase());
        if (!normalizedRequiredRoles.includes(normalizedRole)) {
            throw new Error("Forbidden");
        }
        req.users = {
            email: user.email,
            name: user.name,
            id: user.id,
            role: normalizedRole,
        };
        next();
    });
};
//# sourceMappingURL=auth.js.map