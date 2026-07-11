import type { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync.js";
import { adminService } from "./admin.service.js";
import { sendResponse } from "../../utils/sendResponse.js";
import httpStatus from 'http-status';

const getAllUsers = catchAsync(async(req: Request, res: Response, next: NextFunction) => {
    const { page = 1, limit = 10, role, status } = req.query;

    const filters: any = {
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

const updateUserStatus = catchAsync(async(req: Request, res: Response, next: NextFunction) => {
    const userId = req.params?.id as string;
    const { status } = req.body;

    if (!userId) {
        throw new Error("User ID is required");
    }

    if (!status || !["active", "banned"].includes(status)) {
        throw new Error("Status must be either 'active' or 'banned'");
    }

    const updatedUser = await adminService.updateUserStatus(
        userId,
        status as "active" | "banned"
    );

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: `User ${status} successfully`,
        data: updatedUser
    });
});

const getAllProperties = catchAsync(async(req: Request, res: Response, next: NextFunction) => {
    const { page = 1, limit = 10, userId } = req.query;

    const filters: any = {
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

const getAllRentals = catchAsync(async(req: Request, res: Response, next: NextFunction) => {
    const { page = 1, limit = 10, status } = req.query;

    const filters: any = {
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
}
