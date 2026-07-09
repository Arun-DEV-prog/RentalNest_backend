import type { IAdminUserFilter, IAdminPropertyFilter, IAdminRentalFilter } from "./admin.interface";
export declare const adminService: {
    getAllUsers: (filters: IAdminUserFilter) => Promise<{
        data: {
            id: string;
            email: string;
            name: string;
            role: import("../../../generated/prisma/enums").usersRole;
            phone: string;
            status: import("../../../generated/prisma/enums").userStatus;
            divison: string;
            district: string;
            created_at: Date;
            updated_at: Date;
        }[];
        pagination: {
            total: number;
            page: number;
            limit: number;
            pages: number;
        };
    }>;
    updateUserStatus: (userId: string, status: "active" | "banned") => Promise<{
        id: string;
        email: string;
        name: string;
        role: import("../../../generated/prisma/enums").usersRole;
        phone: string;
        status: import("../../../generated/prisma/enums").userStatus;
        divison: string;
        district: string;
    }>;
    getAllProperties: (filters: IAdminPropertyFilter) => Promise<{
        data: ({
            user: {
                id: string;
                email: string;
                name: string;
                phone: string;
            };
            categories: {
                id: number;
                name: string;
            };
            rentalrequests: {
                id: string;
                status: import("../../../generated/prisma/enums").rentalStatus;
            }[];
        } & {
            id: string;
            title: string;
            dexcription: string | null;
            rent: import("@prisma/client-runtime-utils").Decimal;
            bedrooms: import("@prisma/client-runtime-utils").Decimal | null;
            bathrooms: import("@prisma/client-runtime-utils").Decimal | null;
            size_sqft: import("@prisma/client-runtime-utils").Decimal;
            floor: import("@prisma/client-runtime-utils").Decimal;
            availability: boolean;
            available_from: string;
            address: string;
            division: string | null;
            images: string | null;
            propertiesId: string | null;
            userId: string;
            categoriesId: number;
        })[];
        pagination: {
            total: number;
            page: number;
            limit: number;
            pages: number;
        };
    }>;
    getAllRentals: (filters: IAdminRentalFilter) => Promise<{
        data: ({
            properties: {
                id: string;
                title: string;
                rent: import("@prisma/client-runtime-utils").Decimal;
                address: string;
                user: {
                    id: string;
                    email: string;
                    name: string;
                };
            };
            user: {
                id: string;
                email: string;
                name: string;
                role: import("../../../generated/prisma/enums").usersRole;
                phone: string;
            };
        } & {
            id: string;
            status: import("../../../generated/prisma/enums").rentalStatus;
            created_at: Date;
            updated_at: Date;
            userId: string;
            properties_id: string;
            move_in_date: string;
            lease_duration: string;
        })[];
        pagination: {
            total: number;
            page: number;
            limit: number;
            pages: number;
        };
    }>;
};
//# sourceMappingURL=admin.service.d.ts.map