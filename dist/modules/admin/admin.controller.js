import { catchAsync } from "../../utils/catchAsync";
import { adminService } from "./admin.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from 'http-status';
const getAllUsers = catchAsync(async (req, res, next) => {
    const { page = 1, limit = 10, role, status } = req.query;
    const filters = {
        page: Number(page),
        limit: Number(limit),
        role: role || null,
        status: status || null
    };
    const result = await adminService.getAllUsers(filters);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Users fetched successfully",
        data: result.data,
        meta: result.pagination
    });
});
const updateUserStatus = catchAsync(async (req, res, next) => {
    const userId = req.params?.id;
    const { status } = req.body;
    if (!userId) {
        throw new Error("User ID is required");
    }
    if (!status || !["active", "banned"].includes(status)) {
        throw new Error("Status must be either 'active' or 'banned'");
    }
    const updatedUser = await adminService.updateUserStatus(userId, status);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: `User ${status} successfully`,
        data: updatedUser
    });
});
const getAllProperties = catchAsync(async (req, res, next) => {
    const { page = 1, limit = 10, userId } = req.query;
    const filters = {
        page: Number(page),
        limit: Number(limit),
        userId: userId || null
    };
    const result = await adminService.getAllProperties(filters);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Properties fetched successfully",
        data: result.data,
        meta: result.pagination
    });
});
const getAllRentals = catchAsync(async (req, res, next) => {
    const { page = 1, limit = 10, status } = req.query;
    const filters = {
        page: Number(page),
        limit: Number(limit),
        status: status || null
    };
    const result = await adminService.getAllRentals(filters);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Rental requests fetched successfully",
        data: result.data,
        meta: result.pagination
    });
});
export const adminController = {
    getAllUsers,
    updateUserStatus,
    getAllProperties,
    getAllRentals
};
//# sourceMappingURL=admin.controller.js.map