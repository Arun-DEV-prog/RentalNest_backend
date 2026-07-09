import type { IAdminUserFilter, IAdminPropertyFilter, IAdminRentalFilter } from "./admin.interface";
export declare const adminService: {
    getAllUsers: (filters: IAdminUserFilter) => Promise<{
        data: any;
        pagination: {
            total: any;
            page: number;
            limit: number;
            pages: number;
        };
    }>;
    updateUserStatus: (userId: string, status: "active" | "banned") => Promise<any>;
    getAllProperties: (filters: IAdminPropertyFilter) => Promise<{
        data: any;
        pagination: {
            total: any;
            page: number;
            limit: number;
            pages: number;
        };
    }>;
    getAllRentals: (filters: IAdminRentalFilter) => Promise<{
        data: any;
        pagination: {
            total: any;
            page: number;
            limit: number;
            pages: number;
        };
    }>;
};
//# sourceMappingURL=admin.service.d.ts.map