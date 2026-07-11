import { prisma } from "../../lib/prisma.js"
import type { IAdminUserFilter, IAdminPropertyFilter, IAdminRentalFilter } from "./admin.interface.js"

const getAllUsers = async(filters: IAdminUserFilter) => {
    const { page = 1, limit = 10, role, status } = filters;
    const skip = (Number(page) - 1) * Number(limit);
    const take = Number(limit);

    const where: any = {};
    
    if (role) {
        where.role = role;
    }
    
    if (status) {
        where.status = status;
    }

    const total = await prisma.users.count({ where });

    const users = await prisma.users.findMany({
        where,
        select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            role: true,
            status: true,
            divison: true,
            district: true,
            created_at: true,
            updated_at: true
        },
        skip,
        take,
        orderBy: [{ created_at: "desc" }]
    });

    return {
        data: users,
        pagination: {
            total,
            page: Number(page),
            limit: Number(limit),
            pages: Math.ceil(total / Number(limit))
        }
    };
};

const updateUserStatus = async(userId: string, status: "active" | "banned") => {
    const user = await prisma.users.findUniqueOrThrow({
        where: { id: userId }
    });

    const updatedUser = await prisma.users.update({
        where: { id: userId },
        data: { status },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            status: true,
            phone: true,
            divison: true,
            district: true
        }
    });

    return updatedUser;
};

const getAllProperties = async(filters: IAdminPropertyFilter) => {
    const { page = 1, limit = 10, userId } = filters;
    const skip = (Number(page) - 1) * Number(limit);
    const take = Number(limit);

    const where: any = {};

    if (userId) {
        where.userId = userId;
    }

    const total = await prisma.properties.count({ where });

    const properties = await prisma.properties.findMany({
        where,
        include: {
            categories: {
                select: {
                    id: true,
                    name: true
                }
            },
            user: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    phone: true
                }
            },
            rentalrequests: {
                select: {
                    id: true,
                    status: true
                }
            }
        },
        skip,
        take,
        orderBy: [{ title: "desc" }]
    });

    return {
        data: properties,
        pagination: {
            total,
            page: Number(page),
            limit: Number(limit),
            pages: Math.ceil(total / Number(limit))
        }
    };
};

const getAllRentals = async(filters: IAdminRentalFilter) => {
    const { page = 1, limit = 10, status } = filters;
    const skip = (Number(page) - 1) * Number(limit);
    const take = Number(limit);

    const where: any = {};

    if (status) {
        where.status = status;
    }

    const total = await prisma.rentalrequest.count({ where });

    const rentals = await prisma.rentalrequest.findMany({
        where,
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    phone: true,
                    role: true
                }
            },
            properties: {
                select: {
                    id: true,
                    title: true,
                    rent: true,
                    address: true,
                    user: {
                        select: {
                            id: true,
                            name: true,
                            email: true
                        }
                    }
                }
            }
        },
        skip,
        take,
        orderBy: [{ created_at: "desc" }]
    });

    return {
        data: rentals,
        pagination: {
            total,
            page: Number(page),
            limit: Number(limit),
            pages: Math.ceil(total / Number(limit))
        }
    };
};

export const adminService = {
    getAllUsers,
    updateUserStatus,
    getAllProperties,
    getAllRentals
}
